// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import "bootstrap"

ActionCable = require('actioncable')

const cable = ActionCable.createConsumer('ws://localhost:3000')

function establishActionCableConnection() {
    cable.subscriptions.create('GameRoomChannel', {
      connected() {
       console.log('connected to the room')
      },

      disconnected() {

      },

      received(data) {
       console.log(data)

      },

    });
  }

establishActionCableConnection()

fetch('http://127.0.0.1:3000/users', {
  method: 'POST',
  headers: HEADERS,
  body: JSON.stringify(
      {
      user: {
          name: "TestName"
          }
      })
  })
  .then(response => response.json())
  // .then(json => {
  //   // if you want you can handle data sent back from your api here. The problem with
  //   // this is you will only be updating the client that sent the post fetch, and all other
  //   // clients won't have those changes.


  // })
