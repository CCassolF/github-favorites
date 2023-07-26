// classe que vai conter a lógica dos dados
// como os dados serão estruturados
export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root)

    this.tbody = this.root.querySelector('table tbody')

    this.load()
  }

  load() {
    this.entries = [
      {
        login: 'ccassolf',
        name: 'Carlos Cassol',
        public_repos: '76',
        followers: '120000'
      },
      {
        login: 'diego3g',
        name: 'Diego Fernandes',
        public_repos: '76',
        followers: '120000'
      }
    ]
  }
}

// classe que vai criar a visualização e eventos do HTML
export class FavoritesView extends Favorites {
  constructor(root) {
    super(root)

    this.update()
  }

  update() {
    this.removeAllTr()

    

    this.entries.forEach( user => {
      const row = this.createRow()
      
      row.querySelector('.user img').src = `https://github.com/${user.login}.png`
      row.querySelector('.user img').alt = `Imagem de ${user.name}`
      row.querySelector('.user p').textContent = user.name
      row.querySelector('.user span').textContent = user.login
      row.querySelector('.repositories').textContent = user.public_repos
      row.querySelector('.followers').textContent = user.followers

      this.tbody.append(row) 
    })
  }

  createRow() {
    const tr = document.createElement('tr')

    tr.innerHTML = ` 
      <td class="user">
        <img src="https://github.com/ccassolf.png" alt="Imagem de CCassolF">
        <a href="https://github.com/ccassolf" target="_blank">
          <p>Carlos Cassol</p>
          <span>carloscassol</span>
        </a>
      </td>
      <td class="repositories">
        10
      </td>
      <td class="followers">
        5
      </td>
      <td>
        <button class="remove">&times;</button>
      </td>
    `

    return tr
  }

  removeAllTr() {
    this.tbody.querySelectorAll('tr')
      .forEach((tr) => {
        tr.remove()
      })
  }
}