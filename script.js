const clientId = '10a51hcf789ck0nh6ntw0jgit2km8g';
const userArray = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

userArray.map(e => {
    const URL1 = `https://api.twitch.tv/kraken/streams/${e}?client_id=${clientId}`;
    const URL2 = `https://api.twitch.tv/kraken/channels/${e}?client_id=${clientId}`;
    const streamReq = fetch(URL1).then(res => res.json());
    const channelReq = fetch(URL2).then(res => res.json());

    Promise.all([streamReq, channelReq])
        .then(data => {
            let status = (data[0].stream) ? "Online" : "Offline";
            const userDiv = document.getElementById('user');
            const node = document.createElement("li");
            userDiv.appendChild(node).innerHTML = `
                <img src="${data[1].logo}">  <a href="${data[1].url}" target="_blank"> <strong>${data[1].display_name}</strong></a> <span>Status: ${status}</span>    
            `;
            if (status === "Online") {
                node.classList.add("online");
            }
            console.log(data[1]);
        })
        .catch(console.error);
});

