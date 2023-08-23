const ol = document.getElementById('contents-container');

function createAndAddNewTopics(content) {
  const li = document.createElement('li');
  li.innerText = content;
  ol.appendChild(li);
}

let content = '';

content = 'Var - Let - Const';
createAndAddNewTopics(content);

content = 'Function default parameter';
createAndAddNewTopics(content);

content = 'Template string, multiple line string, dynamic string';
createAndAddNewTopics(content);

content = 'Arrow function, multiple parameter, function body';
createAndAddNewTopics(content);

content = 'Big Arrow function';
createAndAddNewTopics(content);

content = 'Spread operator, array max, copy arrays';
createAndAddNewTopics(content);

content = 'Object and Array Destructure';
createAndAddNewTopics(content);

content = 'Keys, values, entries, delete, seal, freeze';

createAndAddNewTopics(content);
content = 'for of, for in';
createAndAddNewTopics(content);
