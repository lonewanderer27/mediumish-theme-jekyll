
var documents = [{
    "id": 0,
    "url": "http://localhost:4000/blog/404.html",
    "title": "404",
    "body": "404 Page does not exist!It could have been deleted or its title has been changed. Please visit my blog's homepage . "
    }, {
    "id": 1,
    "url": "http://localhost:4000/blog/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 2,
    "url": "http://localhost:4000/blog/",
    "title": "Home",
    "body": "      Featured:                                                                                                                                                                                                           Pitfalls in Working as a First Time Freelancer                              :               It was on that faithful day of June 9 2022 when I got my first job as a web developer. I was hesitant at first. . . :                                                                                                                                                                       Jay                                15 Aug 2022                                                                                                                                                                                                                                                                                                                        Making Camp Buddy Toolbox using PySimpleGUI                              :               I once wanted to create a Discord chatbot that speaks exactly like Keitaro, however, none have written a dialog extractor specifically for Camp Buddy, so. . . :                                                                                                                                                                       Jay                                09 Jun 2022                                                                                                                                                          All Stories:                                                                                                     Pitfalls in Working as a First Time Freelancer              :       It was on that faithful day of June 9 2022 when I got my first job as a web developer. I was hesitant at first because I didn’t knew what. . . :                                                                               Jay                15 Aug 2022                                                                                                                                    Reply to Should Old Friends and Days of Long Ago Should Be Forgotten?              :       First of all, young Jay, your grammar sucks and it’s ironic considering that you answered this question during the time that you were taking your Journalism class in Bangkal High. . . :                                                                               Jay                20 Jun 2022                                                                                                                                    Making Camp Buddy Toolbox using PySimpleGUI              :       I once wanted to create a Discord chatbot that speaks exactly like Keitaro, however, none have written a dialog extractor specifically for Camp Buddy, so I wrote Camp Buddy Dialog. . . :                                                                               Jay                09 Jun 2022                                                                                                                                    My Coming Out Story              :       It has been 3-4 years since I discovered I was gay, it was a really hard time for me, but I think I’m ready to tell my story::                                                                               Jay                29 Apr 2022                                                                                                                                    I'm Gay. Nerd.               :       I've recently watched Netflix's Heartstopper and I just related so much to Charlie. There's never been an instance that a character in a movie or series, that made me feel. . . :                                                                               Jay                27 Apr 2022                                                                                                                                    Introducing The Coffee Lounge™              :       10 Years from now, The Coffee Lounge™ is going to be one of the last businesses that I'll establish before going abroad to finally be free from the society that. . . :                                                                               Jay                22 Apr 2022                                               &laquo; Prev       1        2      Next &raquo; "
    }, {
    "id": 3,
    "url": "http://localhost:4000/blog/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 4,
    "url": "http://localhost:4000/blog/page2/",
    "title": "Home",
    "body": "{% if page. url == “/” %}       Featured:       {% for post in site. posts %}    {% if post. featured == true %}      {% include featuredbox. html %}    {% endif %}  {% endfor %}  {% endif %}       All Stories:         {% for post in paginator. posts %}    {% include postbox. html %}    {% endfor %}    {% include pagination. html %}"
    }, {
    "id": 5,
    "url": "http://localhost:4000/blog/pitfalls-in-working-as-a-first-time-freelancer/",
    "title": "Pitfalls in Working as a First Time Freelancer",
    "body": "2022/08/15 - It was on that faithful day of June 9 2022 when I got my first job as a web developer. I was hesitant at first because I didn’t knew what I should do, what should I expect and how is the process gonna be. But eventually I gave in and said to myself, this is going to be a nice addition to my job experience. I was initially alone in the project, but later on when I found out that I making a website for a Security Agency, I had to invite a front-end web developer friend of mine as I knew my design skills we’re not really that good. To say that it went smoothly is an understatement. Something is always bound to fail, and as a developer, you need to fix these problems even when it’s not your role, because it’s needed. So I’ll highlight some of the problems that I we encountered and how my coder friend and I overcame it.  Something is always bound to fail, and as a developer, you need to fix these problems even when it’s not your role, because it’s needed. 1. The customer may not always know what they want. : This was our first problem when we’re at the initial stages of development. I remember I was in the office, facing the client and their subordinates, expecting them to just give us the Figma file where we can see what designs they want for the website so we can just start on coding it, but in my disappointment, they don’t, they don’t even know what Figma is. Lucky for us, my friend and I listed a couple of websites and used those as an example to the client for to look at. It took a while but they managed to find a design that they like so we took note of the design aspects of it and then I came back home, alone. My friend live far away from the office so he can’t really go with me, plus he had been an introvert pretty much their entire life so… after that, for the next 3 days, we just alotted our time in making a wireframe for their website.  They don’t even know what Figma is. 2. Be Willing to Learn Another Technology: Most of people probably don’t want any change. It’s bad, it takes time to get used to, it’s unfamiliar, unsettling and you feel like you’re out of control. But in programming, learning another technology is a requirement, the world of IT is constantly ever changing and if you don’t adapt, you will fall behind. Based on the design that the client wanted, my friend and I decided that it’ll be better if we just use one of his past projects as a base for it. Extending his code proved to be difficult later on, as it was written using vanilla HTML and CSS without a framework.  The world of IT is constantly ever changing and if you don’t adapt, you will fall behind. Mobile responsiveness is one of today’s web standard, it should not be optional but mandatory. Meanwhile the code from my friend’s past website was not. It was just a mess. So I’ve decided that I’ll take two days to rewrite all of it in Boostrap to take advantage of its column and grid features that make implementing mobile responsiveness easy.  Mobile responsiveness is one of today’s web standard, it should not be optional but mandatory. 3. If Needed, Do Things Beyond Your Role: To those developers who are working in a company and are receving constant pay every month, I envy you, as this is not the case with my friend and I. As we’re just starting, in fact we are just a bunch of 2nd Year Students (at the time of writing this) from Adamson University in the Philippines. Just us, we don’t have a Project Manager who usually talks to the client and negotiates the price for us. And because we do not have someone who can negotiate for us, we had to do it for ourselves, specifically me. I’ve had to go to the office and meet up with the client to show the current progress, ask for their feedback and of course, face the executives of the company. And I think it applies to all freelancers who are just like us. It’s not our role, but we have to do it because it what’s needed. 4. Do a Contract Signing First Before Coding: I repeat, you have to have a contract signed first before starting any code. It not only protects you, the developer, but also the client from any possible issues and liabilities, most especially money related. It ensures that both parties agreed to the contract and it’ll be a win/win situation. It was our dumb mistake to not have one. After a month of developing the website, we scheduled a meeting with the client to talk about the final status of the website. We we’re almost complete by then, pages that they wanted we’re already accomplished, pictures we’re already uploaded and all that’s needed is to discuss the price, including the hosting and domain fees.  A contract ensures that both parties agreed and that it’ll be a win/win situation. Inevitably, when we’ve arrived to the price segment of our presentation, they asked us for a contract, to which we are surprised because we do not have one, so I had to go back home that day and I’ve had a meeting with my friend to make the contract with.  It was our dumb mistake to not have one. 5. Do Not Underestimate Your Value: You will be shocked by this but please stay with me, we asked for a whopping Php 6000! Yes, that is the price that we only asked despite having us (two) in our team and the amount of effort that we put in into making the website, which brings me to the next point.  We asked for a whopping Php 6000! We’re both bad at money but especially me. Every time my partner and I evaluated how much we should be asking for in each session that we did the website, I would always retaliate at how big the money my partner is asking for. If he suggested it should be 300, I would lower it down to 250 or 200. Needless to say it was ruthless, but I only realized that at the end. As I have mentioned, we needed to write a contract at the end of the development, it was a blessing in disguise, had it not happened, we wouldn’t have the opportunity to re-evaluate the price that we initially asked for.  If he suggested it should be 300, I would lower it down to 250 or 200. Thankfully after a lot of conversation with my friends who’s older than us, and some teachers, we’ve decided that we’ll ask for Php 15,000. The client agreed so we’re good!  Had it not happened, we wouldn’t have the opportunity to re-evaluate the price that we initially asked for. Current Situation: As of writing this article, the General Manager (aka the client) got sick of COVID-19 unexpectedly and it pushed back the supposed turn over date of the of the website. It was unfortunate but I wish for his fast recovery soon. I’m excited for the turn over and I can’t wait. Once it happens, I’ll be writing article about it to describe how it feels like, and I’ll also discuss the future working / partnership plans that my friend and I have in the future. Till next time! 🫰 "
    }, {
    "id": 6,
    "url": "http://localhost:4000/blog/reply-to-should-old-friends-and-days-of-long-ago-should-be-forgotten/",
    "title": "Reply to Should Old Friends and Days of Long Ago Should Be Forgotten?",
    "body": "2022/06/20 - First of all, young Jay, your grammar sucks and it’s ironic considering that you answered this question during the time that you were taking your Journalism class in Bangkal High School under Prof. Neri Anyway for it’s a no for me. These old friends, together with our old memories with them, they are the reason why and where we are right now. So! Story time, I’ve had an old friend whom helped me pass during my Grade School days. But eventually, there was time that we’ve had to be separated because my family had to move to another city. We haven’t forgotten each other, in fact we often see each other’s posts in Facebook because we’re friends, but, we do not really interact with each other, we just know what happens. Here’s the “exciting” part. Campaign period for Philippines 2022 National Elections have officially started, surprise surprise, most of them are Kakampink. How did I know you ask? Well Facebook, for some reason, decided that I should see my old friends post again because they are kakampinks. If my memory serves me right, I started to see their post when Pasiglaban (Election Campaign of VP Leni Robredo in Emerald Ave. , Pasig City to be President) campaign took place. And since then, I’ve been interacting with them through comments on their shared post. I could’ve shared posts too but oh well, I have soooo many BBM supporter relatives so I just didn’t. "
    }, {
    "id": 7,
    "url": "http://localhost:4000/blog/making-camp-buddy-toolbox-using-pysimplegui/",
    "title": "Making Camp Buddy Toolbox using PySimpleGUI",
    "body": "2022/06/09 - I once wanted to create a Discord chatbot that speaks exactly like Keitaro, however, none have written a dialog extractor specifically for Camp Buddy, so I wrote Camp Buddy Dialog Extractor However, that program is a command line application, meaning a user would have to know how to use a terminal which is not very user friendly… What if someone who’s inexperienced in coding just wants to have fun with their friends, talking to Keitaro or Hiro in their Discord server, like I once wanted… So I thought to myself. . why not make an app that can extract scripts from Camp Buddy? (and more that I can think of in the future) Sooooooo above me is a screenshot of the tool that I’m currently making for a Visual Novel game. It mainly targets those who want to make a python chat bot that speaks exactly like the characters from the Visual Novel. Extracting Assets Tab: The GUI doesn’t become unresponsive thanks to perform_long_operation. And the write_event_value made it easy to pass the current file that is being extracted, as well as the current progress of the extraction from a separate python program Though I kinda wish this also works in the QT port as I prefer the look of that instead of Tkinter. But this will do for now! Extracting Scripts Tab: The layout tools worked very well in keeping the check boxes organized About Window: I really like the About window of GNOME / GTK apps so I made mine look similar to it The Github Repo link is here for anyone who wants to look at the code, warning it’s spaghetti code:https://github. com/lonewanderer27/Camp-Buddy-Toolbox And I am legally required to disclose the code anyway since I used and modified (a bit) the code of the extractor program (which is GPL-3 licensed) "
    }, {
    "id": 8,
    "url": "http://localhost:4000/blog/my-coming-out-story/",
    "title": "My Coming Out Story",
    "body": "2022/04/29 - It has been 3-4 years since I discovered I was gay, it was a really hard time for me, but I think I’m ready to tell my story: I still remember before starting Grade 10, I prayed to God, hoping that no one would bully me anymore and that I’ll have more friends this time around. (I was bullied for a lot of reasons back in Grade 6 to 9, and added the factor that I didn’t had a lot of friends because I was super shy and don’t know how to talk. It was terrible basically) My wish came true and I was super grateful, then with this new friend group I met a guy. He’s a really funny one, he would always make us laugh but specially me, his jokes, because of that I think out of all people we’ve been the most closest. I would describe him as my best friend at the time to be honest. Then one day he told me he’s got crush on a girl, someone that is out of our circle but pretty close to us. He was rejected and I don’t blame the girl because she’s pretty much the aral muna type of person. This is when my best friend started to be sad, really really sad, not just because of the rejection but also some family issues that affected him. I stayed beside him, but most specially when he told me that he could possibly have a mental disorder that greatly affected his mood. I remember searching up articles on how to help someone with this. I was there when he needed someone to talk to, be it in chat, the class or even outside the class. Still remember that special moment when we sat on the side of a bridge, him telling his problems about his mom and just really really sad stuff. I was there through most of it, specially when he tried hurting himself, talking about suicide because he can’t bear it anymore. I begged him not to do it during the several times that he wanted to. Then one day one girl came to our lives, she’s not in our inner circle as well but she’s close to some of us. Soon, she and my best friend started to hangout more often. His mood definitely improved since they started to hangout and I don’t know why. I also felt at the time that I was being jealous at how they’re close. That feeling that you’re not needed anymore and that you should probably just let them be because that is the best for them, most specially for him. But I couldn’t keep those feelings and I think I admitted that I like him, or I was gay. It didn’t ended so well and we weren’t that close anymore after that. I don’t blame him, it must have been stressful for him already because of his problems, and me admitting must have caused him more. I think the most traumatic part of it is that I blamed myself why our friend group broke, even till this day. It was never been the same since. That I ended up loosing the friends I longed for, just because of my realization of my feelings for a guy. But what I didn’t blamed myself for is that I was there for someone when they really needed it. At that time my painful memories of being bullied was still there and feeling alone. And I don’t want that to happen to anyone else, most specially to the person that I like. I think that is my definition of love at the time, let go the person you love the most if it means that they would be better, without you. "
    }, {
    "id": 9,
    "url": "http://localhost:4000/blog/im-gay-nerd/",
    "title": "I'm Gay. Nerd.",
    "body": "2022/04/27 - I’m Gay. Nerd. I’ve recently watched Netflix’s Heartstopper and I just related so much to Charlie. There’s never been an instance that a character in a movie or series, that made me feel so seen as a person. Charlie is someone is who is very introverted, and good at math (while I am skilled at programming and I also like computers), minus the part that he is good at music because for the life of me I can’t even read music notes. Coming out today was probably late since I’ve already known myself as gay years years ago, but I’m just the type of gay guy who is very discreet, and I just thought that nothing is gonna change even if I come out. But I just really wanna get this out of my chest. There is still part of me that wants to be seen as the real me. I tried to keep it to my immediate family and select relatives only and a very few close friends but I feel like in this time I shouldn’t be scared anything anymore. This is me and if somebody can’t accept me so be it. So here ya go ya’ll, I’m part of the rainbow 🙂 🏳️‍🌈 ❤️ "
    }, {
    "id": 10,
    "url": "http://localhost:4000/blog/the-coffee-lounge/",
    "title": "Introducing The Coffee Lounge™",
    "body": "2022/04/22 - I introduce The Coffee Lounge™ A five-star coffee shop, located in the heart of Metro Manila. Serving exceptional coffee, partnered with our famous bread products, your experience in The Coffee Lounge will be nothing short of extravagant and relaxing. It doesn’t exist in real world as of now, yet it represents a milestone in my grand scheme plan of things. 10 Years from now, The Coffee Lounge™ is going to be one of the last businesses that I’ll establish before going abroad to finally be free from the society that I am currently in, and live my life the way I wanted it to be. All the hardships that I’m going through right now, countless of sleepless nights, struggles in school, lots of existential crisis, it’ll all be worth it in the end. Thank you so much sa naging graphic designer ng website at UI / UX Engineer ng The Coffee Lounge™ website Tin-Tin Rodriguez. Your works are just amazing, hire niyo na po siya please XD Visit our website at: https://the-coffee-lounge. pages. dev/ "
    }, {
    "id": 11,
    "url": "http://localhost:4000/blog/i-am-a-tech-nerd/",
    "title": "I am a Tech-Nerd",
    "body": "2020/05/22 - I am a tech-nerd. Collecting a bunch of electronics, opening their insides to see how they work and experimenting with them has been my hobby since I was 11 years old. Now, it’s so much more, I dream the likes of Elon Musk, Bill Gates who own multi-national companies that continues to push the capabilities of our technology, innovating in every where possible. I also strive to change how the society perceives Programming and Tech related Jobs, you are not just sitting in a chair all day waiting for something to happen. “You can create something meaningful that could change the humanity forever, right from your very own keyboard and monitor. ” ~ Jay2020 #PERDEVCAREERS#STEMCOMPROG#FUTUREIT "
    }, {
    "id": 12,
    "url": "http://localhost:4000/blog/should-old-friends-be-forgotten/",
    "title": "Should Old Friends and Days of Long Ago Should Be Forgotten?",
    "body": "2017/06/20 - I think it’s a no. Because these old friends, old memories, they are the reason why and where you are right now. For example, you have an old friend, he/she helped you pass the elementary days, now the time came that you two have to separate of school in High School because of various reasons. You should not forget him/her and what did he/she do to you. "
    }, {
    "id": 13,
    "url": "http://localhost:4000/blog/top-10-greatest-people-i-know/",
    "title": "Top 9 Greatest People I Know",
    "body": "2017/06/15 - 1. Andy Rubin: He because he is the main founder of Android. Which Google bought $50 Million dollars. I’ve added him because without him, Android couldn’t have been existed, there will be no modders and developers like me creating Android forks. 2. Bill Gates: Bill Gates co – founded with Paul Allen. They founded Microsoft which made Windows. FYI, Windows is the most dominant in computer operating system for PC followed by Apple Mac OS then Linux. At first Windows was just color based but now, it was the best Windows 10 ever, combined the Live Tile (Windows 8) and the revival of Start Menu style. (Windows 7) 3. Chainfire: I think that is not his real name. Consider him as the founder of modding in Android. Back in Android as early as Cupcake 1. 5. He is able to crack Android code, and able to install root access. Since then many modders followed what Chainfire started. Still, this time, he is working on FlashFire(On device flashing app) and in root fix in Google Pixel. Lately he developed systemless root for Android 6. 0 following Touchwiz 5. 1. 1. Then Nougat. 4. Rocky Gathercole: He was just a simple girlish boy. Back then he didn’t actually think to be a designer but later on in his life, a filipino designer meet up with him and he suggested to Rocky to became as a designer. His life wasn’t a glorious in the start but slowly he became famous and started to design some hollywood artists their gown or suite. Perfect example of “Some People Achieve Greatness”. 5. Steve Jobs: Believe it or not, i do not actually idolize Apple at first. But now im amazed what Apple has done in making iOS buttery smooth. It’s Steve Jobs who is the father of where is Apple right now. But sadly he is dead already. 6. Hershey Hilado: Her life wasn’t very easy. She is not born with golden spoon on her mouth. Her parents were not easy on her, here parents forcefully married her to a Korean man in exchange for money. But managed to escape to Manila and eventually found by his father relatives, there via laptop of her aunt, she met an Australian man, and the man fetched Hershey from Philippines. She thought that her life is going to perfect this time but not. And eventually broke up with his fiance and she build her own business but it got roughs so she switched to an online store. There, she eventually she got famous after a celebrity noticed her clothes she sells. 7. John Wu: The creator of the most popular Magisk. The universal systemless interface. I can’t find his picture though. Magisk is a tool in Android devices that is used to root a device systemlessly, it doesn’t modify any system files thus bypassing SafetyNet which is developed by Google. Thanks to several contributors to android. John Wu came up with this tool. Lives in Taiwan. He is very friendly, (But almost developers and modders from XDA do) actually he provided a help (full documentation) to those who want to work this mod with their device. 8. Pent: Who created the most powerful automation app on android. Still, this day, I can’t get his pic. Tasker is in which you can create profiles that can automate several things like moving files at a certain time or answer a phone call when you are in home. But it’s pretty complicated specially for begginers as mostly it depends on global variables. He is friendly just like John Wu, and even for begginers, he advises them what to do and how to do it in Tasker. 9. Jamie: He created MacroDroid, an automation app but much easier to understand for begginers. MacroDroid provides a simple user interface, you got set: trigger, an action and an optional constraint, compare to complicated UI of Tasker Just like the first two, he is also friendly. He responds to those who post andasking for help in our forum for that app. He also takes feature request. And guess what, he is an Indi Developer which means,he is the only one who’s working on MacroDroid. "
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow-lg" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-danger btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><small><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});