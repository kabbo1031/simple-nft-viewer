function showNFTs(nfts) {
    const container = document.getElementById("nftList");
    container.innerHTML = "";

    if (nfts.length === 0) {
        container.innerText = "No NFTs found";
        return;
    }

    nfts.forEach(function (nft) {
        const div = document.createElement("div");
        div.innerText = "Contract: " + nft.contract + " | Token ID: " + nft.tokenId;
        container.appendChild(div);
    });
}
