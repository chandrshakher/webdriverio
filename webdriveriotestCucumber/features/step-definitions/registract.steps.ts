import { Given, Then } from '@wdio/cucumber-framework';
import Page from '../pageobjects/page';
import registractPage from '../pageobjects/registract.page';

import RegistractionPage from '../pageobjects/registract.page';
//import SecurePage from '../pageobjects/secure.page';

const pages = {
    login: RegistractionPage
}

// Given(/^i open browser and load url(.+)$/, async function (registractionpageurl) {
//     await browser.url(registractionpageurl)
//     await browser.maximizeWindow()
//    });
 
//    Then(/^i should see message with text (.+)$/, async function (headermessage) {
//      const anyname =await $('.subheader')
//      expect(await anyname.getText()).toEqual(headermessage)
//    });

  
  
  
  
Given(/^i am on page$/,    function (page) {
   
   pages[page].open()
      
  }); 

Given(/^user enter username (.+)$/,  function (emailid) {
    
  });

Then(/^user click on sign button$/,   function () {
    
  });

Then(/^user click on create an account$/,  async function () {
   
  });