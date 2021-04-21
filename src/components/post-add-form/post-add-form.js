import React, { Component } from 'react'
import './post-add-form.css'

export default class PostAddForm extends Component {
   constructor(props) {
      super(props);

      this.state = {
         text: ''
      }

      this.onValueChange = this.onValueChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this)
   }

   onValueChange(e) {
      this.setState({
         text: e.target.value
      })
   }
   onSubmit(e) {
      e.preventDefault();
      if (this.state.text.length === 0) {
         document.querySelector('.new-post-label').classList.add('red')
      } else {
         document.querySelector('.new-post-label').classList.remove('red')
         this.props.onAdd(this.state.text);
      }
      this.setState({
         text: ''
      })

   }

   render() {
      return (
         <form
            className="bottom-panel d-flex"
            onSubmit={this.onSubmit}
         >

            <input className="form-control new-post-label "
               type='text'
               placeholder="О чём вы сейчас думаете?"
               onChange={this.onValueChange}
               value={this.state.text} />
            <button type="submit"
               className="btn btn-outline-secondary"

            >Добавить</button>
         </form>
      )
   }
}