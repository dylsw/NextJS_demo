export const fetchMediaData = async () => {
  try {
    const response = await fetch(
      "http://127.0.0.1:5000/media/download_latest_media",
      {
        cache: "no-store",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    return data.media;
  } catch (error: any) {
    throw new Error(`Error fetching data: ${error.message}`);
  }
};

export const fetchChatbotData = async (question: string) => {
  try {
    const response = await fetch("http://127.0.0.1:5000/chatbot/get_answer", {
      cache: "no-store",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ question: question }),
    });
    const data = await response.json();
    return data.answer;
  } catch (error: any) {
    throw new Error(`Error fetching data: ${error.message}`);
  }
};
