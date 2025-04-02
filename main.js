
$("#Btn").click(function () {
    chatGptRequest();

})


function chatGptRequest() {

    let messageArea = $("#message").val();

    let body = {
        "model": "gpt-3.5-turbo",
        "messages": [{
                "role": "user",
                "content": messageArea,
            }]
    };

    let headers={Authorization: "Bearer (Your_Api_Key)" };

    axios.post("https://api.openai.com/v1/chat/completions", body, {headers: headers,}).then((response) => {
        let reply = response.data.choices[0].message.content;
            $("#responseField").text(reply); 
        })
        .catch(error => {
            console.error("Error:", error.response ? error.response.data : error.message);
        });
      };
    
