(async function(t){const o=await fetch("https://api.github.com/users/facebook/hovercard");if(!o.ok)throw new Error("Failed to get user data");return await o.json()})().then((t=>console.log(t.contexts)));