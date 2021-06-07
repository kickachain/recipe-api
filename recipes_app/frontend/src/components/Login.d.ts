import React from 'react';
interface IState {
    username: string;
    password: string;
    postId?: any;
    errorMessage?: any;
}
interface Props {
}
declare class Login extends React.Component<Props, IState> {
    constructor(props: Props);
    componentDidMount(): void;
    mySubmitHandler: (event: React.FormEvent<HTMLFormElement>) => void;
    render(): JSX.Element;
}
export default Login;
