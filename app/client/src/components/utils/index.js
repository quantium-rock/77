export function shortWallet (addrs, n) {
  return addrs.slice(0, n)+'...'+addrs.slice(-n)
}

export function markWallet(address, wallet){
  if( wallet.value.publicKey.toBase58() == address ) 
    return 'font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600';
}