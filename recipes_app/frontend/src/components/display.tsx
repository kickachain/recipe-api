import React, { Component } from "react";
import { render } from "react-dom";

interface IState {
    data: Array<IRecipe>,
    loaded: boolean,
    placeholder: string
}

interface IRecipe {
    recipe_id: string,
    name: string,
    description: string
}

interface Props { }

class App extends Component<Props, IState, IRecipe> {
    constructor(props: Props) {
        super(props);
        this.state = {
            data: [],
            loaded: false,
            placeholder: "Loading"
        };
    }

    componentDidMount() {
        fetch("api/recipes")
            .then(response => {
                if (response.status > 400) {
                    return this.setState(() => {
                        return { placeholder: "Something went wrong!" };
                    });
                }
                return response.json();
            })
            .then(data => {
                this.setState(() => {
                    return {
                        data,
                        loaded: true
                    };
                });
            });
    }

    render() {
        return (
            <ul>
                {this.state.data.map((recipe: IRecipe) => {
                    return (
                        <li key={recipe.recipe_id}>
                            {recipe.name} - {recipe.description}
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export default App;

const container = document.getElementById("app");
render(<App />, container);