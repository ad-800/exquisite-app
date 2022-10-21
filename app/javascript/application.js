// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import "bootstrap"

ActionCable = require('actioncable')

var cable = ActionCable.createConsumer('ws://localhost:3000/cable')

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
