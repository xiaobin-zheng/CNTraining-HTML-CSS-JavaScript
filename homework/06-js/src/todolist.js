window.onload = () => {
    document.getElementById('input').addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            addItem(event.target.value)
        }
    })

    document.getElementById('clear-btn').addEventListener('click', () => clearAllItem())

    document.getElementById('all-btn').addEventListener('click', () => renderAll())

    document.getElementById('active-btn').addEventListener('click', () => renderActive())

    document.getElementById('completed-btn').addEventListener('click', () => renderCompleted())

    Array.from(document.getElementsByClassName('delete-btn')).forEach(element => {
        element.addEventListener('click', (event) => deleteItem(event.target.parentNode.id))  
    })

    Array.from(document.getElementsByClassName('checkbox-round')).forEach(element => {
        element.addEventListener('change', (event) => changeItemState(event.target.parentNode.id, element.checked))
    })
}


let itemCount = 0
var itemList = []

function renderAll() {
    removeAllItemNode()
    removeButtonActive()
    const itemListNode = getItemListNode()
    itemList.forEach(item => itemListNode.appendChild(item.itemNode))
    document.getElementById('all-btn').classList.add('active')
}

function renderActive() {
    removeAllItemNode()
    removeButtonActive()
    const itemListNode = getItemListNode()
    const activeNodes = itemList.filter(item => !item.completed)
    activeNodes.forEach(node => itemListNode.appendChild(node.itemNode))
    document.getElementById('active-btn').classList.add('active')
}

function renderCompleted() {
    removeAllItemNode()
    removeButtonActive()
    const itemListNode = getItemListNode()
    const completedNodes = itemList.filter(item => item.completed)
    completedNodes.forEach(node => itemListNode.appendChild(node.itemNode))
    document.getElementById('completed-btn').classList.add('active')
}

function removeButtonActive() {
    document.getElementById('all-btn').classList.remove('active')
    document.getElementById('active-btn').classList.remove('active')
    document.getElementById('completed-btn').classList.remove('active')
}

function removeAllItemNode() {
    itemList.forEach(item => item.itemNode.remove())
}

function clearAllItem() {
    removeAllItemNode()
    itemList = []
    setItemCount(0)
}

function deleteItem(id) {
    const item = itemList.find(item => item.id === id)
    item.itemNode.remove()
    itemList.splice(itemList.indexOf(item), 1)
    setItemCount(getItemCount() - 1)
}

function changeItemState(id, completed) {
    const item = itemList.find(item => item.id === id)
    item.completed = completed
    if (completed) {
        item.itemNode.getElementsByClassName('task')[0].classList.add('completed')
    } else {
        item.itemNode.getElementsByClassName('task')[0].classList.remove('completed')
    }
}

function addItem(taskText) {
    if (!taskText || taskText.length === 0) {
        return
    }
    const itemList = getItemListNode()
    const id = Date.now()
    const itemNode = createItemNode(id, taskText)
    itemList.appendChild(itemNode)

    this.itemList.push({
        id: id,
        completed: false,
        taskText: taskText,
        itemNode: itemNode
    })

    setItemCount(getItemCount() + 1)
    clearTaskInput()
}

function createItemNode(id, taskText) {
    const item = document.createElement('div')
    item.id = id
    item.classList.add('item')

    item.appendChild(createItemCheckbox(id))
    item.appendChild(createTaskText(taskText))
    item.appendChild(createDeleteButton(id))

    return item
}

function createItemCheckbox(id) {
    const checkbox = document.createElement('input')
    checkbox.value = id
    checkbox.type = 'checkbox'
    checkbox.classList.add('checkbox-round')
    checkbox.onchange = () => changeItemState(id, checkbox.checked)
    return checkbox
}

function createTaskText(text) {
    const taskText = document.createElement('input')
    taskText.classList.add('task')
    taskText.type = 'text'
    taskText.value = text
    return taskText
}

function createDeleteButton(id) {
    const deleteButton = document.createElement('div')
    deleteButton.classList.add('delete-btn')
    deleteButton.onclick = () => deleteItem(id)
    return deleteButton
}

function getItemCount() {
    return itemCount
}

function setItemCount(newItemCount) {
    itemCount = newItemCount
    updateItemCountText(newItemCount)
}

function clearTaskInput() {
    document.getElementById('input').value = null
}

function updateItemCountText(count) {
    const itemCountNode = document.getElementById('list-count')
    itemCountNode.innerText = count
}

function getItemListNode() {
    return document.getElementById('item-list')
}