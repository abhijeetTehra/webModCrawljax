const css = `body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    margin: 0
}

code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, Courier New, monospace
}

.App {
    text-align: center
}

.App-logo {
    height: 40vmin;
    pointer-events: none
}

@media (prefers-reduced-motion:no-preference) {
    .App-logo {
        -webkit-animation: App-logo-spin 20s linear infinite;
        animation: App-logo-spin 20s linear infinite
    }
}

.App-header {
    align-items: center;
    background-color: #282c34;
    color: #fff;
    display: flex;
    flex-direction: column;
    font-size: calc(10px + 2vmin);
    justify-content: center;
    min-height: 100vh
}

.App-link {
    color: #61dafb
}

@-webkit-keyframes App-logo-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg)
    }

    to {
        -webkit-transform: rotate(1turn);
        transform: rotate(1turn)
    }
}

@keyframes App-logo-spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg)
    }

    to {
        -webkit-transform: rotate(1turn);
        transform: rotate(1turn)
    }
}

#rating {
    align-items: center;
    display: flex;
    justify-content: center
}

.joke {
    background-color: bisque;
    border-radius: 5px;
    box-shadow: 0 0 5px gray
}

#landingPage {
    text-shadow: 0 0 1px #000
}`
module.exports = JSON.stringify(css);