import Node from './node.js'

class LinkedList {
  constructor() {
    this.HEAD = null
    this.length = 0
  }

  prepend(value) {
    if (this.HEAD) {
      this.HEAD = new Node(value, this.HEAD)
    } else {
      this.HEAD = new Node(value)
    }

    this.length++
  }

  append(value) {
    if (!this.HEAD) return this.prepend(value)

    let current = this.HEAD
    while (current.next !== null) current = current.next

    current.next = new Node(value)
    this.length++
  }

  size() {
    if (!this.HEAD) return null
    return this.length
  }

  head() {
    return this.HEAD
  }

  tail() {
    let current = this.HEAD
    while (current && current.next) current = current.next
    return current
  }

  at(index) {
    if (!this.HEAD) return null

    let i = 0
    let current = this.HEAD

    while (i !== index && current.next) {
      current = current.next
      i++
    }

    if (i === index) return current
    return null
  }

  pop() {
    if (!this.HEAD) return null
    if (!this.HEAD.next) {
      this.HEAD = null
    } else {
      this.at(this.length - 1).next = null
    }

    this.length--
  }

  contains(value) {
    if (!this.HEAD) return false
    for (let i = 0; i < this.length; i++) {
      if (this.at(i).val === value) {
        return true
      }
    }
    return false
  }

  find(value) {
    if (!this.HEAD) return null
    for (let i = 0; i < this.length; i++) {
      if (this.at(i).val === value) {
        return i
      }
    }
    return null
  }

  toString() {
    if (!this.HEAD) return null

    let listString = ''
    for (let i = 0; i < this.length; i++) {
      listString += `( ${this.at(i).val} ) -> `
    }
    listString += 'null'

    return listString
  }

  insertAt(value, index) {
    if (!this.HEAD || index > this.length) return null

    if (index === 0) {
      this.HEAD = new Node(value, this.HEAD)
    } else {
      let curr = this.HEAD
      for (let i = 0; i < index - 1; i++) {
        curr = curr.next
      }

      const node = new Node(value, curr.next)
      curr.next = node
    }

    this.length++
  }

  removeAt(index) { } // this.length--
}

const list = new LinkedList()

console.log('Empty List:', list)

list.prepend('something')
list.append('other thing')
list.append('some almost last')
// list.append('some really last')
list.append('wow')
// list.prepend("I'm first")

console.log('Full List:', list)
console.log('---')

// console.log('size():', list.size())
// console.log('head():', list.head())
// console.log('tail():', list.tail())
// console.log('at(index):', list.at(6))

// list.pop()

console.log('List Edited:', list)
console.log('---')
// console.log('tail():', list.tail())
// console.log('at(index):', list.at(0))
// console.log(list.find('wow'))
console.log(list.toString())

list.insertAt('inserted', 1)
console.log(list.toString())

