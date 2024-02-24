export default async function getImage() {
  const url = 'https://hargrimm-wikihow-v1.p.rapidapi.com/images?count=1';
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '2fe520abb8mshd79df9eafb04f27p1f1c25jsn38901fc3d848',
      'X-RapidAPI-Host': 'hargrimm-wikihow-v1.p.rapidapi.com'
    }
  };
  console.log("Fetching data from API...");

  try {
 
    const response = await fetch(url, options);
   
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    console.log("Parsed JSON result:", result);
    return result;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
