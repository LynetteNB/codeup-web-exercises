let wait = (time) => {
    return myPromise = new Promise ((resolve, reject) => {
        setTimeout(() => {
                resolve();
            }, time)});
};

let lastLogin = (username) => {
    let gitHubPromise = fetch(`https://api.github.com/users/${username}/events`, {headers: {'Authorization': 'a46e864b55c7b97d68800deed2edf493fc7a94d3'}});
    return gitHubPromise.then(response => response.json()).then(data => {return data[0].created_at});
};
lastLogin("lynettenb").then(date => console.log(`The date of the last commit is ${date}`));