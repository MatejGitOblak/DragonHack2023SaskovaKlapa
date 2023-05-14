const prompt = "give me very funny questions about probability and statistics and answer me in this format: Q:(question) A:(answer) Answers MUST be only in decimal numbers and not with / sign.";
const model = "text-davinci-003";
const maxTokens = 100;
const apiKey = "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";


async function get_q_a() {
    const res = await fetch("https://api.openai.com/v1/engines/" + model + "/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apiKey
        },
        body: JSON.stringify({
            prompt: prompt,
            max_tokens: maxTokens
        })
    })
    return res.json();
}

const respon = get_q_a();

respon.then(respon => x = respon.choices[0].text)
.then(x => {if(x == 'undefined') {console.log('napaka')} else {document.getElementById('main1_h1').innerHTML = x.split('\n')[2].split('Q:')[1]}})
.catch(err => console.log(err))

respon.then(respon => x = respon.choices[0].text)
.then(x => {if(x == 'undefined') {console.log('napaka')} else {document.getElementById('mh1').innerHTML = parseFloat(x.split('A:')[1]).toFixed(3)}})
.catch(err => console.log(err))

 
document.getElementById('mh2').innerHTML = Math.random().toFixed(2);
document.getElementById('mh3').innerHTML = Math.random().toFixed(2);
document.getElementById('mh4').innerHTML = Math.random().toFixed(2);
