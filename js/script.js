const data = [
  {
    bid: "1c", value: "18+pp", next:[
      {bid: "1d", value: "0-7pp"}
    ]
  }
];

let listDiv = document.getElementById('bids');

list_bids(data, listDiv);

function list_bids(data, parent_html_element) {

  for (let i = 0; i < data.length; ++i) {
    let ul=document.createElement('ul');
    let li=document.createElement('li');
    li.innerHTML = data[i].bid + " - " + data[i].value;

    if (data[i].next) {
      list_bids(data[i].next, li);
    }

    ul.appendChild(li);
    parent_html_element.appendChild(ul);
  }

}