import React from "react";
import "./product-form.scss";

export class AddProductForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      formFields: {
        title: "",
        description: "",
        price: "",
      }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addProduct({
      id: Date.now() % 100000,
      ...this.state.formFields,
    });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      formFields: {
        ...this.state.formFields,
        [name]: value,
      }
    });
  }

  render() {
    const { title, description, price } = this.state.formFields;

    return (
      <form onSubmit={this.handleSubmit} className="product-form">
        <Field
          title="Название"
          value={title}
          onChange={this.handleChange}
          type="text"
          name="title"
        />
        <Field
          title="Описание"
          value={description}
          onChange={this.handleChange}
          type="text"
          name="description"
        />
        <Field
          title="Цена"
          value={price}
          onChange={this.handleChange}
          type="number"
          name="price"
        />
        <button>Добавить</button>
      </form>
    );
  }
}

class Field extends React.Component {
  render() {
    const { type, value, name, title, onChange } = this.props;

    return (
      <label className="product-form-label">
        {title}
        <input
          value={value}
          onChange={onChange}
          type={type}
          name={name}/>
      </label>
    );
  }
}