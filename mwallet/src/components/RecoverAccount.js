import React from "react";
import { BulbOutlined } from "@ant-design/icons";
import {Button, Input} from 'antd' ;
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { ethers } from "ethers";

const {TextArea} = Input ;



function RecoverAccount({setWallet , setSeedPhrase}) {
  const navigate = useNavigate();
  const [typedSeed, setTypedSeed] = useState("");
  const [nonValid, setNonValid] = useState(false);

  function seedAdjust(e){
    setNonValid(false);
    setTypedSeed(e.target.value);


  }

  function recoverWallet() {
    let recoveredWallet ;
    try {
      recoveredWallet = ethers.Wallet.fromPhrase(typedSeed);
    }catch(err){
      setNonValid(true);
      return;
    }
    setSeedPhrase(typedSeed)
    setWallet(recoveredWallet.address)
    navigate("/yourwallet")
    return ; 

  }



  return (
    <>
      <div className="content">
      <div className="mnemonic">
          <BulbOutlined style = {{fontSize:"20px"}} />
          <div>
            Want To Recover Your Acount ?? Write your 12 words seed phrase (separated by spaces)
          </div>
          </div>
          <TextArea value={typedSeed} onChange={seedAdjust}
          rows = {4}
          className="seedPhraseContainer"
          placeholder="Write Your Seed Phrase Here....." />

<Button disabled = {
  typedSeed.split(" ").length !== 12 || typedSeed.slice(-1)===" "
}
        className="frontPageButton"
        type = "primary"
        onClick={() => recoverWallet()}
        >
          Recover Wallet
        </Button>
        {nonValid && <p style={{color : "red"}}>Invalid SeedPhrase</p>}
        <p className="frontPageBottom" onClick={() => navigate("/")}
        >
          <span>Back Home</span> 
        </p>


       
      </div>
    </>
  );
}

export default RecoverAccount;
