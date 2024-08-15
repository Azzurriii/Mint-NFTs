# Setup check
solana --version
solana-keygen --version
sugar --version

# Path to Owner and Creator
pwd

# New keygen for Creator and Owner
solana-keygen new --outfile /home/azzurri/studihub-nfts/Owner.json
## Owner pubkey: 2ZeySJZ8b3qKMpwwnqWdsQQSTvr4YTNx6Ewjhzy56ts1
solana-keygen new --outfile /home/azzurri/studihub-nfts/Creator.json
## Creator pubkey: EscsnpgzWaC8R4Qwxsyjak6NZ6fygaBiLHWQz4nPrmCE

# Keypair set
solana config set --keypair /home/azzurri/studihub-nfts/Owner.json
# RPCs set
solana config set --url https://devnet.helius-rpc.com/?api-key=45f56ccc-5d88-4a15-aeea-f4b44b8fe635
# Check for config
solana config get
# Airdrop for 2 account
## Owner
solana airdrop 2 2ZeySJZ8b3qKMpwwnqWdsQQSTvr4YTNx6Ewjhzy56ts1
## Creator
# Then, Add Private key of Owner and Creator to Phantom
# Tạo assets với cấu trúc quy định, và kiểm tra
sugar validate
# Tạo file config
sugar config create
# Upload
sugar upload
# Deploy
sugar deploy
sugar verify
# Candy Machine ID: 7v1pLtrs3Kt9xyngtJiN4WFibHFiLX5ybKXH1dy8iwaP
# Add guards
sugar guard add
# Config env
# Run
npm install
npm start