function formatEthreumBalance(balanceInWei: string, accuaracy: number = 2) {
  try {
    const formattedBalance = (parseInt(balanceInWei) / 10 ** 18).toFixed(
      accuaracy
    );
    return formattedBalance;
  } catch (error) {}
}
export default formatEthreumBalance;
