export default class MultipleChoiceQuestion {
  constructor(description, options) {
    this.description = description
    this.options = options
  }

  printQeustionChoices() {
    this.options.forEach((index, option) => {
      console.log(`${index + 1} ${option}`)
    })
  }
}
