import { ethers, formatEther } from "ethers";

export async function connectWallet() {
  let signer = null;

  let provider;
  if (window.ethereum == null) {
    // they only have read-only access
    console.log("using read-only defaults");
    provider = ethers.getDefaultProvider(5);
  } else {
    // Connect to the MetaMask EIP-1193 object. This is a standard
    // protocol that allows Ethers access to make all read-only
    // requests through MetaMask.
    provider = new ethers.BrowserProvider(window.ethereum);
    // It also provides an opportunity to request access to write
    // operations, which will be performed by the private key
    // that MetaMask manages for the user.
    signer = await provider.getSigner();
  }
  return [provider, signer];
}

export async function getWalletBalance(
  provider: ethers.AbstractProvider | ethers.BrowserProvider
) {
  let balance = await provider.getBalance("ethers.eth");
  return formatEther(balance);
}

export async function getWalletAddress(signer: ethers.JsonRpcSigner) {
  let address = signer === null ? "" : await signer.getAddress();
  return address;
}
