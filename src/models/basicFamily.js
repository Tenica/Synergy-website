const mongoose = require('mongoose')
const validator = require('validator')




const BasicFamily = mongoose.model('basicFamily', {
    name : {
        type: String,
        required: true,
        trim: true
    },
    email: {
          type: String,
          required: true,
          trim: true,
          lowercase: true,
          vaidate(value) {
             if (!validator.isEmail(value))  {
                 throw new Error('email is invalid')
             }
          }
    },
    phone: {
          type: String,
          required: true,
          validate(value) {
              if (!validator.isMobilePhone(value)) {
                  throw new Error('phone number is invalid')
              }
          }
  
    },
    age: {
        type: Number,
        default: 0,
        required: true,
        validate(value) {
            if (value < 0)
            throw new Error('Age must be a positive number')
        }
    }
  
  })
  
  
  module.exports = BasicFamily