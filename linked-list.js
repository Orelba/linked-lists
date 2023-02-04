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
      let current = this.HEAD
      for (let i = 0; i < index - 1; i++) {
        current = current.next
      }

      const node = new Node(value, current.next)
      current.next = node
    }

    this.length++
  }

  removeAt(index) {
    if (!this.HEAD || index >= this.length) return null
    if (index === 0) {
      this.HEAD = this.HEAD.next
      this.length--
      return
    }

    let current = this.HEAD
    let prev = null
    let i = 0

    while (current !== null && i !== index) {
      prev = current
      current = current.next
      i++
    }

    prev.next = current.next

    this.length--
  }
}