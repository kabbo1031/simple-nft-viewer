async function loadNFTs(wallet) {
    const address = await wallet.getAddress();
    const provider = wallet.provider;

    const sampleContracts = [];
    const results = [];

    for (let i = 0; i < sampleContracts.length; i++) {
        const contract = new ethers.Contract(sampleContracts[i], NFT_ABI, provider);
        const balance = await contract.balanceOf(address);

        for (let j = 0; j < balance.toNumber() && j < MAX_NFT_CHECK; j++) {
            const tokenId = await contract.tokenOfOwnerByIndex(address, j);
            results.push({
                contract: sampleContracts[i],
                tokenId: tokenId.toString()
            });
        }
    }

    return results;
}
