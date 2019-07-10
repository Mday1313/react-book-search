import React from "react";
import Wrapper from "../components/Wrapper";
import Nav from "../components/Nav";

function NoMatch() {
    return (
        <div>
            <Nav></Nav>
            <Wrapper>
                <h1 className="text-white">404 Page Not Found</h1>
                <h1>
                    <span role="img" aria-label="Face With Rolling Eyes Emoji">
                        🙄
              </span>
                </h1>

            </Wrapper>
        </div>
    );
}

export default NoMatch;