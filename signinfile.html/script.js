// Function to handle token exchange
async function exchangeTokens() {
    const receiverAddress = document.getElementById('receiver').value;
    const amountMATIC = document.getElementById('amount').value;
  
    try {
      // Validate inputs
      if (!receiverAddress || !amountMATIC) {
        alert('Please enter both the receiver address and the amount.');
        return;
      }
  
      // Convert amount to Wei
      const amountWei = web3.utils.toWei(amountMATIC, 'ether');
  
      // Send transaction
      const transactionHash = await web3.eth.sendTransaction({
        to: receiverAddress,
        value: amountWei,
      });
  
      alert('Transaction successful! Transaction Hash: ' + transactionHash);
    } catch (error) {
      console.error('An error occurred:', error);
      alert('An error occurred. Please check the console for more details.');
    }
  }
  
  // Update ICO information
  function updateICOInformation() {
    const maxGoalElement = document.getElementById('maxGoal');
    const amountRaisedElement = document.getElementById('amountRaised');
    const currentPriceElement = document.getElementById('currentPrice');
    const crowdsaleStatusElement = document.getElementById('crowdsaleStatus');
  
    // Update values (Example values, replace with actual data)
    const maxGoal = '275 Million';
    const amountRaised = '0';
    const currentPrice = '0.0001';
    const crowdsaleStatus = 'Open';
  
    maxGoalElement.textContent = maxGoal;
    amountRaisedElement.textContent = amountRaised;
    currentPriceElement.textContent = currentPrice;
    crowdsaleStatusElement.textContent = crowdsaleStatus;
  }