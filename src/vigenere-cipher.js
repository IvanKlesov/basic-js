const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(direct = true) {
    this.isDirect = direct
    this.alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error();
    }

    let string = ''

    message = message.toUpperCase()
    key = key.toUpperCase()

    for (let i = 0, j = 0; i < message.length; i++) {
      if (!key[j]) j = 0

      if (!this.alphabet.includes(message[i])) {
        string += message[i]
        continue
      }

      let keyIndex = this.alphabet.indexOf(key[j])
      let keyRow = this.alphabet.slice(keyIndex, this.alphabet.length).concat(this.alphabet.slice(0, keyIndex))
      let messageIndex = this.alphabet.indexOf(message[i])

      string += keyRow[messageIndex]
      j++
    }

    return this.isDirect ? string : string.split('').reverse().join('')
  }


  decrypt(message, key) {
    if (!message || !key) {
      throw new Error();
    }

    let string = ''

    message = message.toUpperCase()
    key = key.toUpperCase()

    for (let i = 0, j = 0; i < message.length; i++) {
      if (!key[j]) j = 0

      if (!this.alphabet.includes(message[i])) {
        string += message[i]
        continue
      }

      let keyIndex = this.alphabet.indexOf(key[j])
      let keyRow = this.alphabet.slice(keyIndex, this.alphabet.length).concat(this.alphabet.slice(0, keyIndex))
      let messageIndex = keyRow.indexOf(message[i])

      string += this.alphabet[messageIndex]
      j++
    }

    return this.isDirect ? string : string.split('').reverse().join('')
  }
}


module.exports = VigenereCipheringMachine;
