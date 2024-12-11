const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const collisionsMap = []
for (let i = 0; i < collisions.length; i += 132) {
  collisionsMap.push(collisions.slice(i, 132 + i))
}

const boundaries = []
const offset = {
  // Modifica-lo afetará parâmetros, como posição inicial do player (Deslocamento)
  x: -605,
  y: -5600
}

collisionsMap.forEach((row, i) => {
  row.forEach((symbol, j) => {
    if (symbol === 1025)
      // Código da Colisão
      boundaries.push(
        new Boundary({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          }
        })
      )
  })
})

const characters = []
const villagerImg = new Image()
villagerImg.src = './img/villager/Idle.png'

const oldManImg = new Image()
oldManImg.src = './img/oldMan/Idle.png'

const ferreiroImg = new Image()
ferreiroImg.src = './img/ferreiro/ferreiro.png'

const militarImg = new Image()
militarImg.src = './img/militar/militar.png'

const mercadorImg = new Image()
mercadorImg.src = './img/faro/mercador.png'

const artesaoImg = new Image()
artesaoImg.src = './img/artesao/Idle.png'

const sacerdoteImg = new Image()
sacerdoteImg.src = './img/faro/sacerdote.png'

const timetesImg = new Image()
timetesImg.src = './img/militar/timetes.png'

collisionsMap.forEach((row, i) => {
  row.forEach((symbol, j) => {
    // 1035 == Militar
    if (symbol === 1035) {
      characters.push(
        new Character({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          },
          image: militarImg,
          frames: {
            max: 4,
            hold: 297
          },
          scale: 3,
          dialogue: [
            '<strong>Militar Troiano:</strong><br><br>...',
            '<strong>Militar Troiano:</strong><br><br>Olá Heleno.'
          ]
        })
      )
    }
    // 1026 === villager
    else if (symbol === 1026) {
      characters.push(
        new Character({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          },
          image: villagerImg,
          frames: {
            max: 4,
            hold: 60
          },
          scale: 3,
          animate: true,
          dialogue: [
            '<strong>Troiano:</strong><br><br>...',
            '<strong>Troiano:</strong><br><br>Ei, forasteiro ! O que faz aqui, hein ?',
            '<strong>Troiano:</strong><br><br>Deixe-me adivinhar, você é Heleno?<br><br> Veio admirar nossa cidade porque nunca viu algo tão grandioso na sua terra miserável ?',
            '<strong>Troiano:</strong><br><br>Não está pensando em trazer outro "presente" como aquele cavalo ridículo ?<br><br> Pois fique sabendo que, desta vez, nem chegaria à praça ! Aqui é Tróia, meu caro hahahahaha',
            '<strong>Troiano:</strong><br><br>Vai conhecer a cidade ? Ótimo, só não se perca nos mercados nem tente subir a Acrópole sem permissão. Se passar pelo templo de Atena, baixe a cabeça e mostre respeito, ou até os deuses vão rir de você.'
          ]
        })
      )
    }
    // 1031 === oldMan
    else if (symbol === 1031) {
      characters.push(
        new Character({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          },
          image: oldManImg,
          frames: {
            max: 4,
            hold: 60
          },
          scale: 3,
          dialogue: [
            '<strong>Idoso:</strong><br><br>Ah, bem-vindo jovem Heleno. Vejo que veio conhecer a grandiosa Tróia. Permita-me guiá-lo com minhas palavras, pois estes caminhos têm história que poucos podem contar. <br><br> Comece pela praça central, onde o mercado está sempre vivo - ali você verá o coração do nosso povo.',
            '<strong>Idoso:</strong><br><br>Depois, siga para a direção Norte da cidade, onde estará a acrópole da cidade. <br><br>Lá, no ponto mais alto da cidade, você verá a residência do rei e o verdadeiro símbolo da nossa força. É um lugar que faz até o mais forte lembrar dos deuses.',
            '<strong>Idoso:</strong><br><br>Tróia é mais do que uma cidade, jovem. É um testemunho de resistência e grandeza. <br><br>Que seus passos por aqui sejam leves e suas memórias, eternas !'
          ]
        })
      )
    }

    // 1047 == Ferreiro
    else if (symbol === 1047) {
      characters.push(
        new Character({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          },
          image: ferreiroImg,
          frames: {
            max: 4,
            hold: 60
          },
          scale: 3,
          dialogue: [
            '<strong>Ferreiro:</strong><br><br> Ah, um jovem Heleno! Seja bem-vindo à minha forja. Aqui o aço ganha forma, e o bronze vira lenda nas mãos de guerreiros e viajantes.',
            '<strong>Ferreiro:</strong><br><br> Veja esta espada de bronze, forjada com liga forte e resistente. O estanho veio das montanhas hititas, e o cobre dos portos do Chipre. Equilibrada, afiada e pronta para o combate — uma lâmina digna de quem busca glória nos campos de batalha.',
            '<strong>Ferreiro:</strong><br><br> Se prefere algo para defesa, tenho escudos laminados com bronze, leves o bastante para manobrar, mas fortes o suficiente para repelir lanças e flechas.',
            '<strong>Ferreiro:</strong><br><br> Não deixe de olhar também nossas pontas de lança e pás de arado. Troia não é só uma cidade de guerreiros, mas de agricultores e mercadores. <br><br>Forjamos tanto para a guerra quanto para a paz.',
            '<strong>Ferreiro:</strong><br><br> Lembre-se: o segredo de uma boa arma não está apenas no metal, mas na alma daquele que a empunha. Escolha bem, rapaz, e que Hefesto guie seu caminho !'
          ]
        })
      )
    }

    // 1070 == Mercador
    else if (symbol === 1070) {
      characters.push(
        new Character({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          },
          image: mercadorImg,
          frames: {
            max: 4,
            hold: 60
          },
          scale: 3,
          dialogue: ['']
        })
      )
    }
    // 1099 == Artesão
    else if (symbol === 1099) {
      characters.push(
        new Character({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          },
          image: artesaoImg,
          frames: {
            max: 4,
            hold: 60
          },
          scale: 3,
          dialogue: [
            '<strong>Artesão:</strong><br><br> Ah, jovem Heleno! Seja bem-vindo ao mercado de Troia! Vejo que os ventos do Helesponto o trouxeram com segurança. Em que posso servi-lo hoje? Temos os melhores tecidos da região, dignos até de reis!',
            '<strong>Artesão:</strong><br><br> Aqui em Troia VI, somos famosos por nossa lã macia, obtida das ovelhas que pastam nos campos férteis da Trôade. <br><br> Veja este manto vermelho tingido com púrpura de múrice. A cor é rica e vibrante, símbolo de nobreza. Não há tecido que desperte mais inveja entre os chefes!',
            '<strong>Artesão:</strong><br><br> Ah, o linho troiano é famoso em toda a região! Cultivado perto do rio Escamandro, é tecido com habilidade pelas mulheres locais. Leve e fresco, perfeito para os verões escaldantes. Veja esta túnica branca, lisa como a água corrente.<br><br> Também temos peças bordadas com padrões geométricos, uma influência dos nossos contatos com os minoicos de Creta.',
            '<strong>Artesão:</strong><br><br> Escolha com sabedoria, rapaz! Um bom tecido pode ser um companheiro fiel em suas jornadas ou um presente digno dos salões de Micenas. Troia está sempre pronta para atender aqueles que apreciam qualidade e tradição!'
          ]
        })
      )
    }

    // Sacerdote == 1071
    else if (symbol === 1071) {
      characters.push(
        new Character({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          },
          image: sacerdoteImg,
          frames: {
            max: 4,
            hold: 240
          },
          animate: true,
          scale: 3,
          dialogue: [
            '<strong>Laocoonte, o Sacerdote:</strong><br><br>....',
            '<strong>Laocoonte, o Sacerdote:</strong><br><br> A ignorância cega até os mais sábios…<br><br> Eles acreditam que a guerra terminou apenas porque os navios partiram? Não veem que esta calma é o prelúdio da tempestade?',
            '<strong>Laocoonte, o Sacerdote:</strong><br><br> Um presente dos gregos…<br><br>Como podem ser tão insensatos? Ulisses não conhece honra, apenas truques e ciladas.<br><br> Se ao menos ouvissem a voz da razão em vez dos sussurros da esperança…',
            '<strong>Laocoonte, o Sacerdote:</strong><br><br> Eu os avisei. Há algo escondido ali. Eu ouvi a madeira gemer sob a lança.<br><br>Mesmo os deuses parecem surdos aos meus apelos. Será este o destino inevitável de Troia?<br><br> Que o orgulho e a ilusão a levem à ruína?',
            '<strong>Laocoonte, o Sacerdote:</strong><br><br> Eles não escutam… e temo que em breve, tudo o que restará serão cinzas e lamentos.',
            '<strong>Laocoonte, o Sacerdote:</strong><br><br> Quidquid id est, timeo Danaos et dona ferentes !<br><br> Tradução (latim): "Seja o que for, temo os gregos, mesmo quando trazem presentes!"'
          ]
        })
      )
    }
    // 1061 == Militar Acrópole
    else if (symbol == 1061) {
      characters.push(
        new Character({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          },
          image: militarImg,
          frames: {
            max: 4,
            hold: 297
          },
          scale: 3,
          dialogue: [
            '<strong>Militar Troiano:</strong><br><br>...',
            '<strong>Militar Troiano:</strong><br><br> A Acrópole é a alma de Troia. Quem quiser profaná-la, terá que passar pela minha espada primeiro — e eu prometo, ela não será clemente.'
          ]
        })
      )
    }
    // 1062 == Militar Acrópole
    else if (symbol == 1062) {
      characters.push(
        new Character({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          },
          image: militarImg,
          frames: {
            max: 4,
            hold: 297
          },
          scale: 3,
          dialogue: [
            '<strong>Militar Troiano:</strong><br><br>...',
            '<strong>Militar Troiano:</strong><br><br> Enquanto eu estiver de pé, nenhum invasor subirá estas escadas. Que os deuses guiem meu braço e a honra de Troia proteja minhas costas.'
          ]
        })
      )
    }
    // 1063 == Militar Acrópole
    else if (symbol == 1063) {
      characters.push(
        new Character({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          },
          image: militarImg,
          frames: {
            max: 4,
            hold: 297
          },
          scale: 3,
          dialogue: [
            '<strong>Militar Troiano:</strong><br><br>...',
            '<strong>Militar Troiano:</strong><br><br> Este solo é sagrado, este posto é minha vida. Se Troia deve cair, será sobre o meu corpo antes de tocar a Acrópole.'
          ]
        })
      )
    }
    // 1064 == Militar Acrópole
    else if (symbol == 1064) {
      characters.push(
        new Character({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          },
          image: militarImg,
          frames: {
            max: 4,
            hold: 297
          },
          scale: 3,
          dialogue: [
            '<strong>Militar Troiano:</strong><br><br>...',
            '<strong>Militar Troiano:</strong><br><br> Aqui, na sombra dos deuses, sou o último bastião. Se o inimigo quiser tomar a Acrópole, que venha; enfrentará o aço e a ira de quem não conhece rendição.'
          ]
        })
      )
    }

    // 1065 == Tímetes
    else if (symbol == 1065) {
      characters.push(
        new Character({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          },
          image: timetesImg,
          frames: {
            max: 4,
            hold: 297
          },
          scale: 3,
          dialogue: [
            '<strong>Tímetes, Guerreiro Troiano:</strong><br><br> Troianos, vejam este presente! Não há mais guerra! Após tantos anos de sofrimento, os gregos finalmente se renderam. <br>Este cavalo imenso é um tributo à nossa grandeza e coragem!',
            '<strong>Tímetes, Guerreiro Troiano:</strong><br><br> Não há dúvida, é claro como o sol! Os gregos reconhecem nossa força. <br>Ulisses e seus guerreiros, astutos como sempre, deixaram para trás este troféu.<br>O que mais poderiam nos dar, senão algo digno de nossa vitória?',
            '<strong>Tímetes, Guerreiro Troiano:</strong><br><br> Este cavalo, grande e imponente, é a chave para nossa paz. <br>Levá-lo para dentro das muralhas é o passo final. Não há mais inimigos, apenas a vitória e o alívio!<br><br> O medo da guerra se foi, agora é hora de celebrarmos!',
            '<strong>Tímetes, Guerreiro Troiano:</strong><br><br> "O que há a temer? Este cavalo é um presente dos deuses! <br>Vamos celebrar a nossa grandeza! <br><br><br><br>(Eneida, Livro II, de Virgílio)"'
          ]
        })
      )
    }
    if (symbol !== 0) {
      boundaries.push(
        new Boundary({
          position: {
            x: j * Boundary.width + offset.x,
            y: i * Boundary.height + offset.y
          }
        })
      )
    }
  })
})

const image = new Image()
image.src = './img/Pellet Town.png'

const foregroundImage = new Image()
foregroundImage.src = './img/foregroundObjects.png'

const playerDownImage = new Image()
playerDownImage.src = './img/playerDown.png'

const playerUpImage = new Image()
playerUpImage.src = './img/playerUp.png'

const playerLeftImage = new Image()
playerLeftImage.src = './img/playerLeft.png'

const playerRightImage = new Image()
playerRightImage.src = './img/playerRight.png'

const player = new Sprite({
  position: {
    x: canvas.width / 2 - 192 / 4 / 2,
    y: canvas.height / 2 - 68 / 2
  },
  image: playerDownImage,
  frames: {
    max: 4,
    hold: 10
  },
  sprites: {
    up: playerUpImage,
    left: playerLeftImage,
    right: playerRightImage,
    down: playerDownImage
  }
})

const background = new Sprite({
  position: {
    x: offset.x,
    y: offset.y
  },
  image: image
})

const foreground = new Sprite({
  position: {
    x: offset.x,
    y: offset.y
  },
  image: foregroundImage
})

const keys = {
  w: {
    pressed: false
  },
  a: {
    pressed: false
  },
  s: {
    pressed: false
  },
  d: {
    pressed: false
  }
}

const movables = [background, ...boundaries, foreground, ...characters]
const renderables = [
  background,
  ...boundaries,
  ...characters,
  player,
  foreground
]

function animate() {
  const animationId = window.requestAnimationFrame(animate)
  renderables.forEach((renderable) => {
    renderable.draw()
  })

  let moving = true
  player.animate = false

  if (keys.w.pressed && lastKey === 'w') {
    player.animate = true
    player.image = player.sprites.up

    checkForCharacterCollision({
      characters,
      player,
      characterOffset: { x: 0, y: 3 }
    })

    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i]
      if (
        rectangularCollision({
          rectangle1: player,
          rectangle2: {
            ...boundary,
            position: {
              x: boundary.position.x,
              y: boundary.position.y + 3
            }
          }
        })
      ) {
        moving = false
        break
      }
    }

    if (moving)
      movables.forEach((movable) => {
        movable.position.y += 3
      })
  } else if (keys.a.pressed && lastKey === 'a') {
    player.animate = true
    player.image = player.sprites.left

    checkForCharacterCollision({
      characters,
      player,
      characterOffset: { x: 3, y: 0 }
    })

    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i]
      if (
        rectangularCollision({
          rectangle1: player,
          rectangle2: {
            ...boundary,
            position: {
              x: boundary.position.x + 3, // + 3 -> Espécie de prevenção para colisões
              y: boundary.position.y
            }
          }
        })
      ) {
        moving = false
        break
      }
    }

    if (moving)
      movables.forEach((movable) => {
        movable.position.x += 3
      })
  } else if (keys.s.pressed && lastKey === 's') {
    player.animate = true
    player.image = player.sprites.down

    checkForCharacterCollision({
      characters,
      player,
      characterOffset: { x: 0, y: -3 }
    })

    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i]
      if (
        rectangularCollision({
          rectangle1: player,
          rectangle2: {
            ...boundary,
            position: {
              x: boundary.position.x,
              y: boundary.position.y - 3
            }
          }
        })
      ) {
        moving = false
        break
      }
    }

    if (moving)
      movables.forEach((movable) => {
        movable.position.y -= 3
      })
  } else if (keys.d.pressed && lastKey === 'd') {
    player.animate = true
    player.image = player.sprites.right

    checkForCharacterCollision({
      characters,
      player,
      characterOffset: { x: -3, y: 0 }
    })

    for (let i = 0; i < boundaries.length; i++) {
      const boundary = boundaries[i]
      if (
        rectangularCollision({
          rectangle1: player,
          rectangle2: {
            ...boundary,
            position: {
              x: boundary.position.x - 3,
              y: boundary.position.y
            }
          }
        })
      ) {
        moving = false
        break
      }
    }

    if (moving)
      movables.forEach((movable) => {
        movable.position.x -= 3
      })
  }
}
animate()

let lastKey = ''
window.addEventListener('keydown', (e) => {
  if (player.isInteracting) {
    switch (e.key) {
      case ' ':
        player.interactionAsset.dialogueIndex++

        const { dialogueIndex, dialogue } = player.interactionAsset
        if (dialogueIndex <= dialogue.length - 1) {
          document.querySelector('#characterDialogueBox').innerHTML =
            player.interactionAsset.dialogue[dialogueIndex]
          return
        }

        // finish conversation
        player.isInteracting = false
        player.interactionAsset.dialogueIndex = 0
        document.querySelector('#characterDialogueBox').style.display = 'none'

        break
    }
    return
  }

  switch (e.key) {
    case ' ':
      if (!player.interactionAsset) return

      // beginning the conversation
      const firstMessage = player.interactionAsset.dialogue[0]
      document.querySelector('#characterDialogueBox').innerHTML = firstMessage
      document.querySelector('#characterDialogueBox').style.display = 'flex'
      player.isInteracting = true
      break
    case 'w':
      keys.w.pressed = true
      lastKey = 'w'
      break
    case 'a':
      keys.a.pressed = true
      lastKey = 'a'
      break

    case 's':
      keys.s.pressed = true
      lastKey = 's'
      break

    case 'd':
      keys.d.pressed = true
      lastKey = 'd'
      break
  }
})

window.addEventListener('keyup', (e) => {
  switch (e.key) {
    case 'w':
      keys.w.pressed = false
      break
    case 'a':
      keys.a.pressed = false
      break
    case 's':
      keys.s.pressed = false
      break
    case 'd':
      keys.d.pressed = false
      break
  }
})

let clicked = false
addEventListener('click', () => {
  if (!clicked) {
    audio.Map.play()
    clicked = true
  }
})

function resizeCanvas() {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  player.position = {
    x: canvas.width / 2 - 192 / 4 / 2,
    y: canvas.height / 2 - 68 / 2
  }
}

window.addEventListener('resize', resizeCanvas)
