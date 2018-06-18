let gitin = init()
let keys = gitin['keys']
let hash = gitin['hash']

generateKeyborad(keys, hash)
monitorKeyboary(hash);


function init() {
    let keys = {
        '0': ['esc', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12', 'shut'],
        '1': ['~', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '+', 'delete'],
        '2': ['tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '{', '}', '|'],
        '3': ['capslock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ':', '"', 'enter'],
        '4': ['shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '<', '>', '?', 'shift'],
        '5': ['fn', 'control', 'option', 'command', 'nb', 'command', 'option', '↑', '←', '↓', '→'],
        length: 6
    }

    let hash = {
        'q': 'qq.com',
        'w': 'weibo.com',
        'e': 'qzone.qq.com',
        'r': 'lol.qq.com',
        't': 'taobao.com',
        'y': 'yamaxun.com',
        'u': 'youku.com',
        'i': 'iqiyi.com',
        'o': 'y.qq.com',
        'p': 'tianyi.com',
        'a': 'amazon.cn',
        's': '',
        'd': 'douban.com',
        'f': 'fackbook.com',
        'g': 'ganji.com',
        'h': 'hexun.com',
        'j': 'jd.com',
        'k': 'kengdeji.com',
        'l': 'lol.com',
        'z': 'zhihu.com',
        'x': 'xunlei.com',
        'c': '',
        'v': 'baihe.com',
        'b': 'baidu.com',
        'n': '',
        'm': 'meituan.com'
    }
    let getFormlocalStorage = JSON.parse(localStorage.getItem('key') || 'null')
    if (getFormlocalStorage) {
        hash = getFormlocalStorage
    }

    return {
        keys: keys,
        hash: hash
    }
}



function generateKeyborad(keys, hash) {
    for (let i = 0; i < keys.length; i++) {
        let div = tag('div')
        app.appendChild(div)
        let row = keys[i]
        for (let i = 0; i < row.length; i++) {
            let kbd = tag('kbd')
            let button = createButton(row[i])
            let img = createImage(hash[row[i]])
            kbd.classList = row[i]
            kbd.innerText = row[i]
            kbd.appendChild(img)
            kbd.appendChild(button)
            div.appendChild(kbd)
        }
    }
}


function createButton(id) {
    let button = tag('button')
    button.innerText = '编辑'
    button.id = id
    button.onclick = (e) => {
        let key = e.target.id
        let enterUrl = prompt('给我一个新网址')
        let img2 = e.target.previousSibling
        img2.src = 'http:/' + enterUrl + '/favicon.ico'
        img2.onerror = function (e) {
            e.target.src = 'http://pa3otstvm.bkt.clouddn.com/18-6-17/18751353.jpg'
        }
        hash[key] = enterUrl
        localStorage.setItem('key', JSON.stringify(hash))
    }
    return button
}


function tag(name) {
    return document.createElement(name)
}

function createImage(down) {
    let img = tag('img')
    if (down) {
        img.src = 'http://' + down + '/favicon.ico'
    } else {
        img.src = 'http://pa3otstvm.bkt.clouddn.com/18-6-17/18751353.jpg'
    }
    img.onerror = function (e) {
        e.target.src = 'http://pa3otstvm.bkt.clouddn.com/18-6-17/18751353.jpg'
    }
    return img
}

function monitorKeyboary(hash) {
    document.onkeypress = (e) => {
        let key = e.key
        let websit = hash[key]
        window.open('http://' + websit, '_blank')
    }
}
