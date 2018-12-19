import React from 'react'
import styled from 'styled-components'
import firebase from 'firebase'
import { Link } from 'gatsby'

const Button = styled.div`
  text-align: center;
  font-size: 150%;
  font-family: 'Font Awesome';
  cursor: pointer;
`
const SmallButton = styled.div`
  font-size: 40%;
  font-family: 'Orbitron', sans-serif;
  margin-top: 2rem;
  cursor: pointer;
`
var config = {
  apiKey: 'AIzaSyBsTceUCv-JTVGh0MTMgJYZIMyUm1tWAG4',
  authDomain: 'my-photo-app-62a09.firebaseapp.com',
  databaseURL: 'https://my-photo-app-62a09.firebaseio.com',
  projectId: 'my-photo-app-62a09',
  storageBucket: 'my-photo-app-62a09.appspot.com',
  messagingSenderId: '592942362420',
}
let firebaseDB = firebase.initializeApp(config)

class StarButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {
        userID: '',
        password: '',
        email: '',
        date: new Date(),
        rating: '',
      },
      class: {
        class_one: '',
        class_two: '',
        class_three: '',
        class_four: '',
        class_five: '',
      },
    }
  }

  userRating = event => {
    let userId = event.target.id
    let state = this.state
    switch (userId) {
      case 'one':
        state.user.rating = 'One Star'
        state.class.class_one = 'checked'
        state.class.class_two = ''
        state.class.class_three = ''
        state.class.class_four = ''
        state.class.class_five = ''
        this.setState({ state })
        break
      case 'two':
        state.user.rating = 'Two Stars'
        state.class.class_one = 'checked'
        state.class.class_two = 'checked'
        state.class.class_three = ''
        state.class.class_four = ''
        state.class.class_five = ''
        this.setState({ state })
        break
      case 'three':
        state.user.rating = 'Three Stars'
        state.class.class_one = 'checked'
        state.class.class_two = 'checked'
        state.class.class_three = 'checked'
        state.class.class_four = ''
        state.class.class_five = ''
        this.setState({ state })
        break
      case 'four':
        state.user.rating = 'Four Stars'
        state.class.class_one = 'checked'
        state.class.class_two = 'checked'
        state.class.class_three = 'checked'
        state.class.class_four = 'checked'
        state.class.class_five = ''
        this.setState({ state })
        break
      case 'five':
        state.user.rating = 'Five Stars'
        state.class.class_one = 'checked'
        state.class.class_two = 'checked'
        state.class.class_three = 'checked'
        state.class.class_four = 'checked'
        state.class.class_five = 'checked'
        this.setState({ state })
        break
    }
  }
  sendData = () => {
    let db = firebaseDB.database().ref('user')
    db.push(this.state.user)
  }
  render() {
    const Button = styled.div`
      text-align: center;
      font-size: 250%;
    `

    return (
      <Button>
        <button
          id="one"
          className={this.state.class.class_one}
          onClick={this.userRating}
        >
          &#9734;
        </button>
        <button
          id="two"
          className={this.state.class.class_two}
          onClick={this.userRating}
        >
          &#9734;
        </button>
        <button
          id="three"
          className={this.state.class.class_three}
          onClick={this.userRating}
        >
          &#9734;
        </button>
        <button
          id="four"
          className={this.state.class.class_four}
          onClick={this.userRating}
        >
          &#9734;
        </button>
        <button
          id="five"
          className={this.state.class.class_five}
          onClick={this.userRating}
        >
          &#9734;
        </button>
        <SmallButton>
          <Link to="/page-2">
            <button onClick={this.sendData}>Submit</button>
          </Link>
        </SmallButton>
      </Button>
    )
  }
}

export default StarButton
