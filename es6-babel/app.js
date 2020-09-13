function foo(isValid) {
  var x = 0
  console.log(`Before: ${x}`)
  if (isValid) {
    let x = 1
    return x
  }

  return x
}


console.log(foo(true))
console.log('==========')

for (var i = 0; i < 2; i++) {
  setTimeout(function() {
    console.log(i)
  }, 100)
}

for (let i = 0; i < 2; i++) {
  setTimeout(function() {
    console.log(i)
  }, 100)
}

// Import/Export module
import { walk } from './add.js'
console.log(walk())

import Circle from './circle.js'

import map from 'lodash/map'
import filter from 'lodash/filter'
import reduce from 'lodash/reduce'

let arr = map([1, 2, 3], item => item * 2)
console.log(arr)

// Dynamic import that helps runtime
//System.import('module_name')
//.then(module => { ...  })
// จัดการ error ในนี้
//   .catch(error => ...)
