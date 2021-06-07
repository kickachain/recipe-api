import React from 'react';
import ReactDOM from 'react-dom';

interface IState {
    username: string,
    password: string,
    postId?: any,
    errorMessage?: any;
}

interface Props { }

class Login extends React.Component<Props, IState> {
    constructor(props: Props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };
    }

    componentDidMount() {
        // POST request using fetch with error handling
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: 'React POST Request Example' })
        };
        fetch('/api/token/', requestOptions)
            .then(async response => {
                const data = await response.json();

                // check for error response
                if (!response.ok) {
                    // get error message from body or default to response status
                    const error = (data && data.message) || response.status;
                    return Promise.reject(error);
                }

                this.setState({ postId: data.id })
            })
            .catch(error => {
                this.setState({ errorMessage: error.toString() });
                console.error('There was an error!', error);
            });
    }

    mySubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const username = document.getElementsByName("username");
        const password = document.getElementsByName("password");
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: username, password: password })
        };
        fetch('/api/token/', requestOptions)
            .then(async response => {
                const data = await response.json();

                // check for error response
                if (!response.ok) {
                    // get error message from body or default to response status
                    const error = (data && data.message) || response.status;
                    return Promise.reject(error);
                }

                this.setState({ postId: data.id })
                console.log(data)
            })
            .catch(error => {
                this.setState({ errorMessage: error.toString() });
                console.error('There was an error!', error);
            });
    }

    render() {
        return (
            <form onSubmit={this.mySubmitHandler}>
                <p>Enter your name:</p>
                <input
                    type='text'
                    name='username'
                />
                <p>Enter your password:</p>
                <input
                    type='password'
                    name='password'
                />
                <button type="submit">Submit</button>
            </form>
        );
    }
}

export default Login;

ReactDOM.render(<Login />, document.getElementById('root'));