import React, { Component } from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { createPost } from "../actions";

class Login extends Component {
  renderField(field) {
    const {
      meta: { touched, error }
    } = field;
    const className = ``;
    return (
      <label>
        <input placeholder="Email" type="email" {...field.input} />
      </label>
    );
  }
  renderField1(field) {
    const {
      meta: { touched, error }
    } = field;
    const className = ``;
    return (
      <label>
        <input placeholder="Password" type="password" {...field.input} />
      </label>
    );
  }
  renderField2(field) {
    const {
      meta: { touched, error }
    } = field;
    const className = ``;
    return (
      <label>
        <input type="submit" {...field.input} />
      </label>
    );
  }

  onSubmit(values) {
    console.log(values);
    this.props.createPost({
      title: values.title,
      categories: values.categories,
      content: "Facebook"
    });
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <section className="login-form-wrap">
          <h1>Facebook</h1>
          <form
            onSubmit={handleSubmit(this.onSubmit.bind(this))}
            className="login-form"
            action=""
          >
            <Field name="title" component={this.renderField} />
            <Field name="categories" component={this.renderField1} />
            <input type="submit" value="Login" />
          </form>
          <h5>
            <a href="https://fb.com">Forget Password</a>
          </h5>
        </section>
      </div>
    );
  }
}

export default reduxForm({ form: "facebookloginform" })(
  connect(
    null,
    { createPost }
  )(Login)
);
