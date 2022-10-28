'use strict';


/**
 * toggle active class on header
 * when clicked nav-toggle-btn
 */

const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-menu-toggle-btn]");

navToggleBtn.addEventListener("click", function () {
  header.classList.toggle("active");
});



/**
 * toggle ctx-menu when click on card-menu-btn
 */

const menuBtn = document.querySelectorAll("[data-menu-btn]");

for (let i = 0; i < menuBtn.length; i++) {
  menuBtn[i].addEventListener("click", function () {
    this.nextElementSibling.classList.toggle("active");
  });
}



/**
 * load more btn loading spin toggle
 */

const loadMoreBtn = document.querySelector("[data-load-more]");

loadMoreBtn.addEventListener("click", function () {
  this.classList.toggle("active");
});




//Fetching data using api

const options = {
  method: 'GET',
  headers: { 'Content-Type': 'application/json', Authorization: '8a341535-9704-4b9d-a42a-1246440eeda6' }
};
const nftSection = document.querySelector('.nft-section')
nftSection.innerHTML = '';
//0.02475 ETH
const addr = ['0xa7a05e655cbed5356d2fa851e96f7f68e4a6f954', '0x401e9ae678cce4efccdb36b1adc61cdb14b522da']
for (var i = 0; i < addr.length; i++) {
  console.log(addr[i])
  //const contract = nfts.nfts[i].contract_address
  let img, desc, name = '';
    fetch(`https://api.nftport.xyz/v0/nfts/${addr[i]}?chain=ethereum`, options)
      .then(response => response.json())
      .then(response => {
        console.log(response)
        img = response.contract.metadata?.thumbnail_url
        desc = response.contract.metadata?.description
        name = response.contract?.name
        nftSection.innerHTML += `
        <div class"imm">
          <img src="${img}" alt="" srcset="">
          <h3>${name}</h3>
          <p>${desc}</p>
        </div>
        `;
      })
      .catch(err => console.error(err));


      //dfkkkjkkkk


      const nftSectionTwo = document.querySelector('.home')
      nftSectionTwo.innerHTML = '';
      fetch(`https://api.nftport.xyz/v0/transactions/stats/${addr[i]}?chain=ethereum`, options)
      .then(response => response.json())
      .then(response => {
        console.log(response)
      })
      .catch(err => console.log(err))

      
}






