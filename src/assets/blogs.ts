export type BlogPost = {
  title: string;
  authorName: string;
  blog: string;
  postDate: Date;
};

export let blogs: BlogPost[] = [
  {
    title: "iOS 15 Brings new ways to stay connected",
    authorName: "123",
    blog: `iOS 15 brings new ways to stay connected and powerful features that help users focus, explore, and do more with on-device intelligence
    Apple previews major updates to FaceTime, new Focus features to reduce distraction, enhanced on-device intelligence to discover information, and more ways to explore the world using Maps, Weather, and Wallet
    iOS 15 introduces SharePlay in FaceTime, Live Text using on-device intelligence, redesigned Notifications, and more.
    Cupertino, California Apple today announced iOS 15, a major update with powerful features that enhance the iPhone experience. iOS 15 makes FaceTime calls more natural, introduces SharePlay for shared experiences, helps users focus and be in the moment with new ways to manage notifications, and brings more intelligence to photos and search to quickly access information. Apple Maps unveils beautiful new ways to explore the world, Weather is redesigned with full-screen maps and more graphical displays of data, Wallet adds support for home keys and ID cards, and browsing the internet with Safari is even simpler with a new tab bar design and Tab Groups. iOS 15 also includes new privacy controls in Siri, Mail, and more places across the system to further protect user information.
    “For many customers, iPhone has become indispensable, and this year we’ve created even more ways it can enhance our daily lives,” said Craig Federighi, Apple’s senior vice president of Software Engineering. “iOS 15 helps users stay connected while sharing experiences in real time, gives them new tools to help reduce distraction and find focus, uses intelligence to enhance the photos experience, and, with huge upgrades to Maps, brings new ways to explore the world. We can’t wait for customers to experience it.”
    More Natural FaceTime Calls and Shared Experiences with SharePlay
    FaceTime helps customers easily connect with those who matter most and with iOS 15, conversations with friends and family feel even more natural. With spatial audio, voices in a FaceTime call sound as if they are coming from where the person is positioned on the screen,1 and new microphone modes separate the user’s voice from background noise. Inspired by the stunning portrait photos taken on iPhone, Portrait mode is now available for FaceTime and designed specifically for video calls, so users can blur their background and put themselves in focus.2 While using Group FaceTime, a new grid view enables participants to see more faces at the same time.
    The stunning Portrait mode from the Camera app is now optimized for video calls in FaceTime.
    Users can now share experiences with SharePlay while connecting with friends on FaceTime, including listening to songs together with Apple Music, watching a TV show or movie from Apple TV+ and other streaming services in sync, or sharing their screen to view apps together. SharePlay works across iPhone, iPad, and Mac, and with shared playback controls, anyone in a SharePlay session can play, pause, or jump ahead. SharePlay even extends to Apple TV, so users can watch shows or movies on a big screen. Disney+, ESPN+, HBO Max, Hulu, MasterClass, Paramount+, Pluto TV, TikTok, Twitch, and many others are integrating SharePlay into their apps — creating entirely new ways to connect.
    FaceTime calls also extend beyond Apple devices with the ability to create a link from iPhone, iPad, or Mac, and share it through Messages, Calendar, Mail, or third-party apps, so anyone can join a FaceTime call from their web browser on Android and Windows devices.3 FaceTime calls on the web remain end-to-end encrypted, so privacy is not compromised.
    Tools to Find Focus
    iOS 15 delivers powerful tools that help users focus and reduce distraction. Focus is a new feature that filters notifications and apps based on what a user wants to focus on. Customers can set their device to help them be in the moment by creating a custom Focus or selecting a suggested Focus, which uses on-device intelligence to suggest which people and apps are allowed to notify them. Focus suggestions are based on users’ context, like during their work hours or while they’re winding down for bed, and when Focus is set on one Apple device, it automatically applies to their other Apple devices. Users can create Home Screen pages with apps and widgets that apply to moments of focus to only display relevant apps and reduce temptation. When a user’s Focus is blocking incoming notifications, their status is automatically displayed to others in Messages, reflecting that a user is not currently reachable.
    A list of Focus types displayed on iPhone 12 Pro.
    The personal Focus setting displayed on iPhone 12 Pro.
    Focus helps users filter notifications to reduce distractions, using a custom Focus or a suggested Focus like Work or Sleep.
    Focus helps users filter notifications to reduce distractions, using a custom Focus or a suggested Focus like Work or Sleep.
    New Notifications Experience
    Notifications have been redesigned, adding contact photos for people and larger icons for apps that make them even easier to identify. To help reduce distraction, a new notification summary collects non-time-critical notifications for delivery at a more opportune time, such as in the morning and evening. Using on-device intelligence, notifications are arranged by priority, with the most relevant notifications rising to the top, and based on a user’s interactions with apps. Urgent messages will be delivered immediately, so important communications will not end up in the summary, and it’s easy to temporarily mute any app or messaging thread for the next hour or for the day.
    Notifications have a new look with larger icons for apps, to make them easier to identify, and a new notification summary.
    On-Device Intelligence Powers Live Text, Advanced Spotlight Search, and More
    Live Text uses on-device intelligence to recognize text in a photo and allow users to take action. For example, users can search for and locate the picture of a handwritten family recipe, or capture a phone number from a storefront with the option to place a call. With the power of the Apple Neural Engine, the Camera app can also quickly recognize and copy text in the moment, such as the Wi-Fi password displayed at a local coffee shop. With Visual Look Up, users can learn more about popular art and landmarks around the world, plants and flowers found in nature, breeds of pets, and even find books.
    Spotlight now uses intelligence to search photos by location, people, scenes, or objects, and using Live Text, Spotlight can find text and handwriting in photos. Spotlight now offers web image search and all-new rich results for actors, musicians, TV shows, and movies. Enhanced results for contacts show recent conversations, shared photos, and even their location if shared through Find My. 
    Photos includes the biggest update ever to Memories, with a fresh new look, an interactive interface, and integration with Apple Music, which uses on-device intelligence to personalize song suggestions that bring memories to life.
    The new Live Text feature on an image displayed on iPhone 12 Pro.
    Spotlight experience displayed on iPhone 12 Pro.
    Live Text uses on-device intelligence to identify text and enhance the photos experience.
    Spotlight now searches photos by location, people, scenes, and objects.
    A Redesigned Browsing Experience with Safari
    Safari gets a new design that makes controls easier to reach with one hand and puts content front and center. The new tab bar is compact and lightweight, and floats at the bottom of the screen, so users can easily swipe between tabs. Tab Groups allow users to save tabs and easily access them at any time across iPhone, iPad, or Mac. New features, such as the customizable start page and web extensions on iOS, make Safari even more personal and powerful.
    Explore the World with Apple Maps
    Apple is committed to building the world’s best map, and iOS 15 takes Maps even further with brand new ways to navigate and explore. Users will experience significantly enhanced details in cities for neighborhoods, commercial districts, elevation, and buildings, new road colors and labels, custom-designed landmarks, and a new night-time mode with a moonlit glow. This is a whole new way of looking at the world through Maps.
    An all-new city navigation and exploration experience comes to Apple Maps with more realistic and colorful details.
    When navigating using iPhone or CarPlay, Maps features a three-dimensional city-driving experience with new road details that help users better see and understand important details like turn lanes, medians, bike lanes, and pedestrian crosswalks.4 Transit riders can find nearby stations more easily and pin favorite lines. Maps automatically follows along with a selected transit route, notifying users when it’s nearly time to disembark, and riders can even keep track on Apple Watch. With iOS 15, users can simply hold up iPhone, and Maps generates a highly accurate position to deliver detailed walking directions in augmented reality.
    New Keys and State IDs Come to Apple Wallet
    Apple Wallet adds support for additional types of keys, making it possible to access everyday places with just a tap. Last summer, Apple introduced digital car keys, and BMW was the first car company to add its keys, allowing users to tap to unlock. This year, digital car keys get even better with support for Ultra Wideband technology, so users can securely unlock and start their supported vehicle without removing their iPhone from a pocket or bag.5 iPhone can also be used to unlock a user’s home, office, or even a hotel room — all through keys stored in Wallet.6
    Later this year, customers in participating states in the US will be able to add their driver’s license or state IDs to Wallet. The Transportation Security Administration is working to enable airport security checkpoints as the first place customers can use their digital Identity Card in Wallet. Identity Cards in Wallet are encrypted and safely stored in the Secure Element, the same hardware technology that makes Apple Pay private and secure.
    A digital home key displayed in Apple Wallet on iPhone 12 Pro.
    A digital hotel key displayed in Apple Wallet on iPhone 12 Pro.
    A digital state ID displayed in Apple Wallet on iPhone 12 Pro.
    House and hotel room keys as well as ID cards come to Wallet for a simple tap-to-unlock experience for everyday places.
    House and hotel room keys as well as ID cards come to Wallet for a simple tap-to-unlock experience for everyday places.
    House and hotel room keys as well as ID cards come to Wallet for a simple tap-to-unlock experience for everyday places.
    New Privacy Features
    iOS 15 introduces even more privacy controls to help protect user information. With on-device speech recognition, audio of Siri requests is now processed entirely on iPhone by default,7 and performance improves significantly. Mail Privacy Protection stops senders from learning whether an email has been opened, and hides IP addresses so senders can’t learn a user’s location or use it to build a profile on them. App Privacy Report offers an overview of how apps use the access that has been granted to location, photos, camera, microphone, and contacts in the last seven days, and which other domains are contacted.8
    App Privacy Report provides more detail on how apps use the access that has been granted to them.
    Redesigned Weather and Notes Apps
    Weather includes more graphical displays of weather data, full-screen maps, and dynamic layouts that change based on conditions. Beautifully redesigned animated backgrounds more accurately reflect the sun’s position and precipitation, and notifications highlight when rain or snow starts and stops.
    Notes adds user-created tags that make it easy to quickly categorize notes, and mentions allow members of shared notes to notify one another of important updates. An all-new Activity view shows the recent history of a shared note.
    Notes adds user-created tags that make it easy to quickly categorize notes in line with relevant content.
    Additional Features
    Siri adds Announce Notifications on AirPods, the ability for users to share what’s on their screen just by asking, and more.
    Shared with You works across the system to find the articles, music, TV shows, photos, and more that are shared in Messages conversations, and conveniently surfaces them in apps like Photos, Safari, Apple News, Music, Podcasts, and the Apple TV app, making it easy to quickly access the information in context.
    iCloud+ combines everything users love about iCloud with new premium features, including Hide My Email, expanded HomeKit Secure Video support, and an innovative new internet privacy service, iCloud Private Relay, at no additional cost.9 Current iCloud subscribers will be upgraded to iCloud+ automatically this fall. All iCloud+ plans can be shared with people in the same Family Sharing group, so everyone can enjoy the new features, storage, and elevated experience that comes with the service. 
    The Health app gets a new sharing tab that lets users share their health data with family, caregivers, or a care team, Trends gives users a way to focus attention on meaningful changes in personal health metrics, and Walking Steadiness is a new metric that empowers people to proactively manage their fall risk.
    HomeKit accessory makers can now enable “Hey Siri” in their products, allowing customers to talk to and get responses from Siri on third-party devices. “Hey Siri”-enabled accessories will relay requests through HomePod or HomePod mini and will support features such as Personal Requests, Intercom, timers, and alarms. Starting today, smart home device manufacturers can begin working with Apple to integrate Siri into their accessories.
    Find My introduces new capabilities to help locate a device that has been turned off or erased, as well as live-streaming locations for family and friends who choose to share their location. Separation Alerts notify a user if they leave an AirTag, Apple device, or Find My network accessory behind in an unfamiliar location, and the Find My network now supports AirPods Pro and AirPods Max. A new Find My widget offers an at-a-glance view directly from the Home Screen. 
    Translate adds a new Live Translate feature that makes conversation flow naturally across languages. Systemwide translation allows users to translate text anywhere on iPhone.
    New iPhone setup makes it more seamless than ever to get started with iPhone. Existing iPhone users can temporarily back up data to iCloud — even without a subscription — to easily transfer their data to a new iPhone. For those moving to iPhone for the first time, an improved “Move to iOS” experience easily transfers photo albums, files, folders, and Accessibility settings, so iPhone feels personal right from the start. 
    Accessibility across iPhone expands with new features for VoiceOver that enable users to explore even more details about the people, text, table data, and other objects within images. In support of neurodiversity, new background sounds help minimize distractions, and for those who are deaf or hard of hearing, Made for iPhone supports new bidirectional hearing aids. Sound Actions customizes Switch Control to work with mouth sounds, and users can now customize display and text size on an app-by-app basis. Apple is also bringing support for recognizing imported audiograms — charts that show the results of a hearing test — to Headphone Accommodations.
    Shared With You feature in Apple Music displayed on iPhone 12 Pro.
    Sharing in the Health app displayed on iPhone 12 Pro.
    Translate being used to translate text in a photo.
    Music shared with users in Messages now appear in a new Shared with You tab in Apple Music.
    The Health app gets a new sharing tab that lets users share their health data with family, caregivers, or a care team.
    Translate goes systemwide, allowing users to translate text anywhere on iPhone.
    Availability
    The developer preview of iOS 15 is available to Apple Developer Program members at developer.apple.com starting today, and a public beta will be available to iOS users next month at beta.apple.com. New software features will be available this fall as a free software update for iPhone 6s and later. For more information, visit apple.com/ios/ios-15-preview. Features are subject to change. Some features may not be available in all regions or all languages.
    Available on iPhone and iPad with A12 Bionic and later and Mac models (2018 or later).
    Available on iPhone and iPad with A12 Bionic and later and Mac computers with the M1 chip.
    Users with non-Apple devices can join using the latest version of Chrome or Edge. Sending video requires H.264 video encoding support.
    Support for CarPlay will be available later this year.
    Digital car keys require a participating car manufacturer and will be coming later this year.
    Support for new keys requires an iPhone running iOS 15 and a compatible door lock for apartments, offices, and hotels that will be available through third parties.
    Available on iPhone and iPad with A12 Bionic and later. Requires download of speech models.
    App Privacy Report will arrive as part of a software update to iOS 15, iPadOS 15, and watchOS 8.
    iCloud+ plans: 50GB with one HomeKit Secure Video camera ($0.99 per month), 200GB with up to five HomeKit Secure Video cameras ($2.99 per month), and 2TB with an unlimited number of HomeKit Secure Video cameras ($9.99 per month).`,
    postDate: new Date(),
  },
  {
    title: "1234",
    authorName: "abc",
    blog: "22222222222222222222222222222",
    postDate: new Date(),
  },
];

export function addBlog(newblog: BlogPost) {
  blogs.push(newblog);
}
