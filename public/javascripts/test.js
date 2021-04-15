const ethereumButton = document.querySelector('.enableEthereumButton');
const showAccount = document.querySelector('.showAccount');

var li=document.createElement("li");

ethereumButton.addEventListener('click', () => {
  getAccount();
});

async function getAccount() {
	
	  await ethereum.request({method: 'eth_requestAccounts'}).then((r)=>{
  	
  	for (var i = 0; i < r.length; i++) {
  		var text = document.createTextNode(r[i]);
  		var ul=document.createElement("ul");
  		ul.appendChild(text);
  		li.appendChild(ul);

  	}
  },showAccount.appendChild(li));
     

 
}
  

