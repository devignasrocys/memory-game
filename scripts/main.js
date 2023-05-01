const ui_ctrl = (() => {
    const board = []
    const game_settings = {
        theme: null,
        players: null,
        grid_size: null,
    }
    const dom_strings = {
        theme: document.getElementById('theme'),
        players: document.getElementById('players'),
        grid_size: document.getElementById('grid-size'),
        btn_start: document.getElementById('btn-start'),
        btn_menu: document.getElementById('btn-menu'),
        start_game_section: document.getElementById('start-game-section'),
        game_board_section: document.getElementById('game-board-section'),
        main_container: document.getElementById('main-container'),
        board: document.getElementById('board'),
    }

    const init_event_listeners = () => {
        dom_strings.theme.addEventListener('click', (e) => {
            game_settings.theme = e.target.innerText
            for (const child of dom_strings.theme.children) {
                child.classList.remove('active')
            }
            e.target.classList.add('active')
        })
        dom_strings.players.addEventListener('click', (e) => {
            game_settings.theme = e.target.innterText
            for (const child of dom_strings.players.children) {
                child.classList.remove('active')
            }
            e.target.classList.add('active')
        })
        dom_strings.grid_size.addEventListener('click', (e) => {
            game_settings.theme = e.target.innterText
            for (const child of dom_strings.grid_size.children) {
                child.classList.remove('active')
            }
            e.target.classList.add('active')
        })
        dom_strings.btn_start.addEventListener('click', () => {
            dom_strings.start_game_section.classList.add('hide')
            dom_strings.game_board_section.classList.remove('hide')
            dom_strings.main_container.style.backgroundColor = 'var(--white)';
        })
    }

    const draw_board = (grid_size) => {
        const numbers = []
        const signs = []
        for(let i = 0; i < grid_size; i++) {
            board.push([])
        }
    }

    return {
        init: init_event_listeners
    }
})()

// init application
ui_ctrl.init()

