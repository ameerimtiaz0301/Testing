/// <reference types="cypress" />
describe('Read and write a file', function(){
    it('Write a file', function(){
        // write txt file
        cy.writeFile('cypress.txt','Testing the text format which also include ')
        cy.writeFile('cypress.txt','Second part of the txt and \n',{flag: 'a+'})
        cy.writeFile('cypress.txt','Adding an array \n',{flag: 'a+'} )
        cy.writeFile('cypress.txt',['cyp1','cyp2','cyp3','cyp4'],{flag: 'a+'})

        // write json file
        cy.writeFile('cypressj.json',{name:'Ameer Imtiaz', email:'ameerimtiaz4@gmail.com', phone:'03034074618', password:'123456'})
        
    })
    it('Read a file',function(){
        cy.readFile('cypress.txt').then(function(value){
            cy.log(value)
        })
        cy.readFile('cypressj.json').then(function(temp){
            cy.log(temp.name)
            cy.log(temp.email)
            cy.log(temp.phone)
            cy.log(temp.password)
        })
        cy.readFile('cypressj.json').then(function(user) {
            expect(user.name).to.equal('Ameer Imtiaz') // true
            cy.log(user.name)
          })
    })
    it('Audio file',function(){
        cy.wait(1).then(_=>{
            new Audio('https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3').play();
        })
    })
})