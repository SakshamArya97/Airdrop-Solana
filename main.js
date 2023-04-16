// import * as solanaWeb3 from "https://unpkg.com/@solana/solanaWeb3.js@latest/lib/index.iife.js";

// Creating a connection with devnet solana
let connection = new solanaWeb3.Connection(solanaWeb3.clusterApiUrl("devnet"), "confirmed");

const airdropSolana = async () => {
    console.log(`Airdrop Transaction started`);      
    const publicKeyString = document.getElementById('public-key').value;
    const solAmount = document.getElementById('amount').value;  
    console.log(publicKeyString, solAmount)
    const publicKey = new solanaWeb3.PublicKey(publicKeyString);
    const airdropSignature = await connection.requestAirdrop(
        publicKey,
        solanaWeb3.LAMPORTS_PER_SOL * solAmount,
    );
    try{
        const txId = airdropSignature;     
        console.log(`https://explorer.solana.com/tx/${txId}?cluster=devnet`)
    }
    catch(err){
        console.log(err);
    }    
}

try{
    console.log(`Airdrop Transaction started out`);    
    document.getElementById('submit-button').addEventListener('click', airdropSolana)
}
catch(err){
    console.log(err);
}    