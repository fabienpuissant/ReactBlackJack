import React, { Component, createRef } from 'react'
import axios from 'axios'

export class Score extends Component {

    static defaultProps = {
        name: 'Name',
        required: true,
    }

    constructor(props) {
        super(props);
        this.state = {
            playerName: "ok",
        };
        this.name = ''
        this.input = createRef()
        this.handleSubmitForm = this.handleSubmitForm.bind(this)
    }


    handleSubmitForm(event) {
        event.preventDefault();
        this.name = this.input.current.value
        this.input.current.value = ""
        axios.post('http://localhost:8080/UserService/addUser', { name: this.name, score: 5050505 })

    }

    render() {
        const { name, required } = this.props
        const style = {
            marginBottom: '5vh',
        }
        return (
            <div className="container" style={style} >
                <div className="row mt-4">
                    <form action="" onSubmit={this.handleSubmitForm}>
                        <div className="form-group">
                            <label htmlFor="Name">Name</label>
                            <input
                                type="text"
                                className="form-control"
                                required={required} name={name}
                                ref={this.input} />
                        </div>
                        <button className="btn btn-primary" onClick={this.handleSubmitForm}>Save the score</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Score
