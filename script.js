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

content = 'Function default parameter';
createAndAddNewTopics(content);
