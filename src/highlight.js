function drill(root, text, results = []) {
  if (root.textContent.indexOf(text) === -1) {
    return []
  }

  for (let i = 0; i < root.childNodes.length; i++) {
    const node = root.childNodes[i]
    if (node.nodeType === 1) {
      drill(node, text, results)
    } else if (node.nodeType === 3 && node.nodeValue.includes(text)) {
      results.push(node)
    }
  }
  return results
}

export default (root, text, index) => {
  const targets = drill(root, text)
  const replacedList = []
  targets.forEach(target => {
    const regex = new RegExp(text)
    const value = target.nodeValue
    const index = value.indexOf(text)
    const before = value.slice(0, index)
    const after = value.slice(index + text.length)
    const replaced = `${before}<span class="open-search-highlight">${text}</span>${after}`
    const previousBrother = target.previousElementSibling
    const nextBrother = target.nextElementSibling
    const targetParent = target.parentNode
    replacedList.push(replaced)
    console.log(replacedList)

    if (previousBrother) {
      previousBrother.insertAdjacentHTML('afterend', replaced)
    } else if (nextBrother) {
      nextBrother.insertAdjacentHTML('beforebegin', replaced)
    } else {
      targetParent.insertAdjacentHTML('afterbegin', replaced)
    }
    targetParent.removeChild(target)
  })
}
