const quotes = [
    "Are non-dads allowed to make dad jokes? Or is it a \"faux pa\"",
    "You hear a knock at the door. You open it. No one is there. It's just a faucet with a basin. Let that sink in.",
    "Yoshi invited me to a party and I asked what he wanted me to bring. I offered beer, but he said... brrrring POP!",
    "You know what Yoda said when he saw himself in 1080p for the first time? HD M I",
    "I was kidnapped by a group of mimes and they did unspeakable things!",
    "There's a fine line between a numerator and a denominator.",
    "Thank you for spending the time to teach me the meaning of \"many\". It means a lot.",
    "I have found that you can't trust atoms. They make up everything!",
    "I am reading a novel in braille. Something bad is going to happen - I can feel it. ",
    "My friend's wife gave birth in the car on the way to the hospital! They named him \"Carson\"",
    "Please make sure you uninstall 2020 and install it fresh. There's a nasty virus in the current version!",
    "Fun fact: The least spoken language in the world is sign language.",
    "I can’t believe someone broke into my garage and stole my limbo stick. Seriously, how low can you go?",
    "I need to figure out how to stop procrastinating. I'll do that later though.",
    "I was going to get a 6 pack of Sprite at the grocery store, but I accidentally picked 7-up",
    "I never wanted a beard, but it's growing on me.",
    "A man tried to sell me a coffin today. I told him that's the last thing I need.",
    "I just found out something that's odd. It's a number not divisible by 2.",
    "My friend keeps saying \"cheer up man it could be worse, you could be stuck underground in a hole full of water.\" I know he means well.",
    "My friend told me I have no sense of direction. I packed up my stuff and right. ",
    "Yeah this year sucks, but 2022 will suck too. Because 2022 is 2020, too. ",
    "My friend got fired from the calendar printing company for taking a month off... :( ",
    "That was the most emotional wedding ever. Even the cake was in tiers!",
    "I heard the guy who won the ski race was actually on a sled... but they let it slide!",
    "That's a nice ham you got there. It'd be a shame if you put an 's' on one end and an 'e' on the other.",
    "I had a dream last night that I was a muffler... I woke up exhausted!",
    "I never wanted to believe that my dad was stealing from his job as a road worker, but when I got home, all the signs were there.",
    "I just learned about a 12 inch tall king. He was a terrible leader... but he made a great ruler!",
    "Butane is lighter than water. After all, butane is a lighter fluid.",
    "The Lego store just reopened after closing during lockdown. People are lined up for blocks!",
    "I keep asking my friends what LGBTQ+ means, but I can't get a straight answer.",
    "I kept thinking my printer was playing music... And I finally realized the paper was jamming!",
    "I quit my job as a treadmill tester. It just felt like I wasn’t going anywhere...",
    "I tried to organize a professional hide and seek tournament, but it was a complete failure. Good players are hard to find.",
];

const quoteEl = document.getElementById("quote");
const timeEl = document.getElementById("now");
const rerollQuote = () => {
    quoteEl.innerText = quotes[Math.floor(quotes.length * Math.random())];

    const now = new Date();
    timeEl.innerText = `Today at ${now.getHours()}:${now.getMinutes()}`
}

quoteEl.onclick = rerollQuote;
rerollQuote();
