function calculateLotSize() {
  const risk = parseFloat(document.getElementById('risk').value);
  const sl = parseFloat(document.getElementById('sl').value);
  const pipValue = 10; // $10 per pip per standard lot for EUR/USD

  if (!risk || !sl || sl === 0) {
    document.getElementById('result').textContent = 'Please enter valid inputs';
    return;
  }

  const lotSize = risk / (sl * pipValue);
  document.getElementById('result').textContent = `Recommended Lot Size: ${lotSize.toFixed(2)} standard lots`;
}

function calculateProfit() {
  const pips = parseFloat(document.getElementById('pips').value);
  const lot = parseFloat(document.getElementById('lot').value);
  const pipValue = 10; // $10 per pip per standard lot

  if (!pips || !lot) {
    document.getElementById('profitResult').textContent = 'Please enter valid inputs';
    return;
  }

  const profit = pips * lot * pipValue;
  document.getElementById('profitResult').textContent = `Estimated P/L: $${profit.toFixed(2)}`;
}
