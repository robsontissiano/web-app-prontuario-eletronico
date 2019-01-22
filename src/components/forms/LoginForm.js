import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button} from 'semantic-ui-react';
// import Validator from 'validator';
import InlineError from '../messages/InlineError';


class LoginForm extends React.Component{
    state = {
        data: {
            email: "",
            password: ""
        },
        loading: false,
        errors: {}
    };

    onChange = e => 
        this.setState({ 
         data: { ...this.state.data, [e.target.name]: e.target.value }
        });

    onSubmit = () => {
        const errors = this.validate(this.state.data);
        this.setState({ errors });
        if (Object.keys(errors).lenght === 0 ) {
            this.props.submit(this.state.data);
        }
    };

    validate = (data) => {
        const errors = {};
        // if (!Validator.isEmail(data.email)) errors.email = "Email invalido";
        if (!data.password) errors.password = "Voce precisa preencher sua senha";
        return errors;
    };

    render(){
        const {data,errors } = this.state;
        return (
            <div class="ui middle aligned center aligned grid">
                <div class="ui stacked secondary  segment">            
                    <Form onSubmit={this.onSubmit}>
                        {/* <Form.Field error={!!errors.email}>
                            <label htmlFor="email">Email</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                placeholder="exemploexemplo.com" 
                                value={data.email}
                                onChange={this.onChange}
                                />
                            {errors.email && <InlineError text={errors.email} />}
                        </Form.Field> */}
                        <Form.Field error={!!errors.id}>
                            <label htmlFor="id">ID</label>
                            <input 
                                type="text" 
                                id="id" 
                                name="id" 
                                placeholder="12345678" 
                                value={data.id}
                                onChange={this.onChange}
                                />
                            {errors.id && <InlineError text={errors.id} />}
                        </Form.Field>                        
                        <Form.Field error={!!errors.password}>
                            <label htmlFor="password">Senha</label>
                            <input 
                                type="password" 
                                id="password" 
                                name="password" 
                                placeholder="Sua Senha" 
                                value={data.password}
                                onChange={this.onChange}
                                />
                            {errors.password && <InlineError text={errors.password} />}
                        </Form.Field>                
                        <Button primary>Login</Button>
                    </Form>
                </div>                
            </div>
        );
    }
}

LoginForm.propTypes = {
    submit: PropTypes.func.isRequired
};

export default LoginForm;
