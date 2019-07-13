
import React, { Component } from "react";
import API from "../utils/API";
import { List, ListItem } from "../components/List";
import { Input, FormBtn } from "../components/Form";
import { Container, Row, Col } from "../components/Grid";



class SearchBooks extends Component {

    //create state
    state = {
        title: "",
        books: [],
        author: "",
        synopsis: "", 
        message: ""
    };


    componentDidMount() {
        // this.loadBooks();
    }

    // loadBooks = () => {
    //     API.getBooks()
    //         .then(res =>

    //             this.setState({ books: res.data, title: "", author: "", synopsis: "" })
    //         )
    //         .catch(err => console.log(err));
    // };


    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    //function to control the submit button of the search form 
    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.title) {
            API.getSearchBooks(this.state.title)
                .then(res => this.setState({ books: res.data.items }))
                .catch(err => this.setState({ error: err.items }));
        }
    };

    handleSavedButton = event => {
        
        event.preventDefault();
        console.log(this.state.books)
        let savedBooks = this.state.books.filter(book => book.id === event.target.id)
        savedBooks = savedBooks[0];
        

        API.saveBook({
            title: savedBooks.volumeInfo.title,
            authors: savedBooks.volumeInfo.authors,
            description: savedBooks.volumeInfo.description,
            image: savedBooks.volumeInfo.imageLinks.smallThumbnail,
            link: savedBooks.volumeInfo.previewLink
            })
            .then(this.setState({ message: alert("Your book is saved") }))
            .catch(err => console.log(err))
        
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col size="md-2"></Col>
                    <Col size="md-8">
                        
                        <h1>Books Search</h1>

                        <form>
                            <Input
                                value={this.state.title}
                                onChange={this.handleInputChange}
                                name="title"
                                placeholder="Enter book title to search (required)"
                            />
                            <FormBtn
                                disabled={!(this.state.title)}
                                onClick={this.handleFormSubmit}>
                                Search</FormBtn>
                        </form>
                       
                    </Col>
                </Row>
                <Row>
                <Col size="md-1"></Col>
                    <Col size="md-10">
                        <h1>Results</h1>
                        {this.state.books.length ? (
                            <List>
                                {this.state.books.map(book => (
                                    <ListItem key={book.id}>
                                        <div className="row">
                                            <div className="col-4">
                                            <img src={book.volumeInfo.imageLinks.smallThumbnail} alt={book.volumeInfo.title} />
                                            </div>
                                            <div className="col-8">
                                            <h2>{book.volumeInfo.title}</h2>
                                           
                                            <p>{book.volumeInfo.authors}</p>
                                            <p>{book.volumeInfo.description}</p>
                                            <a  href={book.volumeInfo.previewLink}><button type="button" className="btn btn-info">View</button></a>   <button className="saveBook btn btn-primary" id={book.id} onClick={(id) => this.handleSavedButton(id)}>
                                            Save Book
                                        </button>

                                       
                                            </div>

                                        </div>
                                        

                                    </ListItem>
                                ))}
                            </List>
                        ) : (
                                <h3>No Results to Display</h3>
                            )}
                    </Col>
                </Row>

            </Container>
        );
    }


}

export default SearchBooks;