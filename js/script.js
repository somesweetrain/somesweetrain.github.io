const all_bids = [
  {
    bid: "1c", value: "17+pp", next:[
      {bid: "1d", value: "0-7pp", next:[
          {bid: "1h", value: "20+pp"}
        ]
      }
    ]
  },
  {
    bid: "1d", value: "11-16pp", next:[
      {bid: "1h", value: "7+pp 4+h", next:[
          {bid: "1s", value: "tavaliselt bluff"}
        ]
      }
    ]
  }
];

let listDiv = document.getElementById('bids');

list_bids(all_bids, listDiv);

function list_bids(data, parent_html_element) {

  for (let i = 0; i < data.length; ++i) {

    let ul=document.createElement('ul');
    let li=document.createElement('li');
    li.innerHTML = data[i].bid + " - " + data[i].value;

    li.onclick = function() { // onclick function to show child elements

      if (data[i].next) {
        list_bids(data[i].next, this);
        console.log(data[i].next);
      }

      li.onclick = function () { } // if list element has been clicked once, then we remove onclick effect
    };

    ul.appendChild(li);
    parent_html_element.appendChild(ul);
  }

}