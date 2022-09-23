import PromptSync = require('prompt-sync')
const prompt = PromptSync()

const bmi = (weight: number, height: number) => { return weight / (Math.pow(height, 2));
}

console.log('Digite seu peso: ')
const weight = Number(prompt(`--> `));

console.log(`Digite sua altura: `)
const height = Number(prompt(`--> `));

const bmiResult = bmi(weight, height)
console.log(`Seu BMI é ${bmiResult}`)