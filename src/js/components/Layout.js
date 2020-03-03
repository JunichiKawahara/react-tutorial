import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component {
    constructor() {
        super();
        this.name = "Tsutomu";
    }

    render() {
        return (
            <>
            <Header />
            <p>It's {this.name}!</p>
            <Footer />
            </>
        );
    }
}