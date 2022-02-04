import satellite from './img/astronaut.png';
import profile from './img/pixel_profile.jpeg';

function Content() {
    return (
        <div className="about">
            <img className="grid rotate" src={satellite} alt="grid background"></img>
            <h1 className="name">電脳世界へようこそ。</h1>
            <div className="description">
                <img className="profile" src={profile} alt="my profile pic"></img>
                <p>Hey, I'm Patrick!</p>
                Welcome to my personal site that's <i>under construction</i> 🏗<br></br>
                I build products at Zeplin by day and fiddle w/ code at night 🌙<br></br>
                Always scheming 🙈<br></br>
                Currently in the bay area but used live in Japan 🇯🇵<br></br>
                This site was built with React and plain old CSS 🎨<br></br> 
                <br></br> 

                <p>Connect</p>
                <a href="mailto:hpatricksuzuki@gmail.com">Email</a><br></br> 
                <a href="https://github.com/patrickluvsoj">Github</a><br></br> 
                <br></br> 

                <p>Random Facts & Hobbies</p>
                I lived in Japan for 10 years between age of 9 to 19.<br></br> 
                I like camping, tennis, coffee, reading and my cat Dustin 🐈<br></br> 
                Fav games: Final Fantasy X, Metal Gear Solid 3 and 2<br></br> 
                Fav anime: Gundam, Ghost in the Shell, Spirited Away<br></br> 
                Coffee nerd. I roast and pull espresso shots.<br></br> 
                I can drive manual/stick shift.<br></br> 
                I know how to string tennis rackets.<br></br> 


                <br></br> 
                <br></br> 

                
            </div>
        </div>
    )
}

export default Content