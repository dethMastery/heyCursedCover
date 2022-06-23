import './style.css'
import {createCanvas, loadImage} from 'canvas'

// Canvas Setting Up
let cnv = createCanvas(3000, 3000)
let ctx = cnv.getContext('2d')

let url = window.location
let explicit = url.search
let check = explicit.slice(10)

console.log(check);

async function canvasSummonning() {
    // Canvas Drawing
    ctx.fillRect(0, 0, 3000, 3000)
    
    // Explicit Logo
    if (check == 'yes') {
      await loadImage('static/explicit.png').then((explicit) => {
        ctx.drawImage(explicit, 2341, 2574.24, 600, 365)
      })
    }

    // Canvas Rendering
    // Setting up Buffer
    let buffer = cnv.toDataURL();

    return buffer
}


// Summon Canvas
canvasSummonning().then(summon => {
  document.querySelector('#app').innerHTML = `
    <h1>cursed album cover generator</h1>

    <img alt="Album Cover" class="cover" src="${summon}">
  `
})