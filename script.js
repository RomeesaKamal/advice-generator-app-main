  
document.addEventListener("DOMContentLoaded", () => {
    const adviceIdElement = document.getElementById("advId"); 
    const adviceTextElement = document.querySelector(".advice-txt"); 
    const button = document.querySelector(".btn"); 
  
    // Function to fetch advice from the API

    async function fetchAdviceById(id = null) {
      try {
        const url = id 
          ? `https://api.adviceslip.com/advice/${id}` 
          : "https://api.adviceslip.com/advice";
          
        const response = await fetch(url);
  
        if (!response.ok) {
          throw new Error("Failed to fetch advice");
        }
  
        // Parse the JSON response

        const data = await response.json();
        const { id: adviceId, advice } = data.slip; 
  
        // Update the advice card with fetched advice

        adviceIdElement.textContent = adviceId; 
        adviceTextElement.textContent = `"${advice}"`; 
      } catch (error) {
       
        adviceTextElement.textContent = "An error occurred. Please try again.";
        console.error(error); 
      }
    }
  
    // Add a click event listener to the button

    button.addEventListener("click", () => {
      fetchAdviceById(); 
    });
  
    // Fetch specific advice with ID 177 on page load
    fetchAdviceById(177);
  });
  