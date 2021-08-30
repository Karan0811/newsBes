import React, { Component } from 'react';
import NewsItem from './NewsItem';

export default class News extends Component {
  articles = [
    {
      source: {
        id: 'breitbart-news',
        name: 'Breitbart News',
      },
      author: 'Matthew Boyle',
      title:
        'Exclusive — Trump: Biden Afghanistan Failure Is ‘Single Most Embarrassing Moment in the History of Our Country’',
      description:
        'Former President Trump told Breitbart News that Biden’s botched Afghanistan withdrawal is the “single most embarrassing moment" for the U.S.',
      url: 'https://www.breitbart.com/politics/2021/08/26/trump-afghanistan-failure-single-most-embarrassing-moment-history-country/',
      urlToImage:
        'https://media.breitbart.com/media/2021/08/donald-trump-rally-arizona-july24-2021-getty-640x335.jpg',
      publishedAt: '2021-08-27T05:02:47Z',
      content:
        'BEDMINSTER, New Jersey Former President Donald Trump told Breitbart News exclusively that his successor President Joe Bidens botched withdrawal from Afghanistan is the single most embarrassing moment… [+10837 chars]',
    },
    {
      source: {
        id: 'breitbart-news',
        name: 'Breitbart News',
      },
      author: 'Jeff Poor',
      title:
        "Trump: Biden Handling of Afghanistan the 'Dumbest Thing' -- 'Dumbest Move' Ever Made Perhaps in the History of Our Country",
      description:
        'During an appearance on FNC\'s "Hannity" on Thursday, former President Donald Trump, Biden\'s predecessor, called the move by the Biden administration to withdraw military forces before evacuating non-military personnel the "dumbest move" in perhaps the history…',
      url: 'https://www.breitbart.com/clips/2021/08/26/trump-biden-handling-of-afghanistan-the-dumbest-thing-dumbest-move-ever-made-perhaps-in-the-history-of-our-country/',
      urlToImage:
        'https://media.breitbart.com/media/2020/12/GettyImages-1229967788-640x335.jpg',
      publishedAt: '2021-08-27T04:48:18Z',
      content:
        'As the U.S. casualty count is trending in the wrong direction in Afghanistan, President Joe Biden is taking heat from all sides for the handling of the withdrawal of U.S. forces from the Central Asia… [+2797 chars]',
    },
    {
      source: {
        id: 'fox-news',
        name: 'Fox News',
      },
      author: 'Fox News',
      title:
        'Hannity: Trump releases video reacting to deadly terror attacks in Afghanistan',
      description:
        "'Hannity' host reacts to the situation in Afghanistan after ISIS-coordinated terror attacks on U.S. servicemen",
      url: 'https://video.foxnews.com/v/6269703025001/',
      urlToImage:
        'https://cf-images.us-east-1.prod.boltdns.net/v1/static/694940094001/f125ad23-0571-4c8b-8c9e-f239326911ad/c2a4f6de-ff99-43fb-99d8-9faa97676234/1280x720/match/image.jpg',
      publishedAt: '2021-08-27T04:07:18.2351372Z',
      content: null,
    },
    {
      source: {
        id: 'la-repubblica',
        name: 'La Repubblica',
      },
      author: 'La Repubblica',
      title: 'Le lacrime di Biden: "Il ritiro non si ferma ma la pagheranno"',
      description:
        'Il presidente, commosso, parla alla nazione. I Repubblicani lo attaccano: Trump invoca le dimissioni',
      url: 'https://www.repubblica.it/esteri/2021/08/26/news/le_lacrime_di_biden_il_ritiro_non_di_ferma_ma_la_pagheranno_-315455774/',
      urlToImage:
        'https://www.repstatic.it/content/nazionale/img/2021/08/26/235021301-272c56cf-c3f6-43fe-bf86-64cd7f87ac7f.jpg',
      publishedAt: '2021-08-27T04:00:00Z',
      content:
        'New York - "Quei soldati morti - dice Joe Biden - sono eroi che hanno perso la loro vita per salvare vite altrui. Sono la parte migliore dell\'America, si sono battuti per i nostri valori. Abbiamo un … [+165 chars]',
    },
    {
      source: {
        id: 'newsweek',
        name: 'Newsweek',
      },
      author: 'Aila Slisco',
      title:
        "After Kabul Airport Carnage, Trump, Republicans Hammer Biden's Decision to Abandon Bagram",
      description:
        "The former U.S. airfield at Bagram, Afghanistan was reportedly abandoned in the middle of the night in early July without the base's new Afghan commander being informed.",
      url: 'https://www.newsweek.com/after-kabul-airport-carnage-trump-republicans-hammer-bidens-decision-abandon-bagram-1623536',
      urlToImage:
        'https://d.newsweek.com/en/full/1881304/joe-biden-republicans-kabul-attack-bagram-trump.jpg',
      publishedAt: '2021-08-27T01:34:08Z',
      content:
        "Republican critics of President Joe Biden are blasting his administration for abandoning a former U.S. airfield in Bagram, about 25 miles away from Thursday's deadly terror attack at the Kabul airpor… [+3775 chars]",
    },
    {
      source: {
        id: 'breitbart-news',
        name: 'Breitbart News',
      },
      author: 'Pam Key',
      title:
        "Ocasio-Cortez: Trump's Xenophobic, Racist Immigration Policies Played Role in Afghanistan Chaos",
      description:
        'Representative Alexandria Ocasio-Cortez (D-NY) said Thursday on MSNBC\'s "The ReidOut" that former President Donald Trump\'s "extremely xenophobic and racist immigration policies" played a role in the current Afghanistan withdrawal chaos. | Clips',
      url: 'https://www.breitbart.com/clips/2021/08/26/ocasio-cortez-trumps-xenophobic-racist-immigration-policies-played-role-in-afghanistan-chaos/',
      urlToImage:
        'https://media.breitbart.com/media/2019/09/AP_19254649167273-640x335.jpg',
      publishedAt: '2021-08-27T01:30:20Z',
      content:
        'Representative Alexandria Ocasio-Cortez (D-NY) said Thursday on MSNBC’s “The ReidOut” that former President Donald Trump’s “extremely xenophobic and racist immigration policies” played a role in the … [+1486 chars]',
    },
    {
      source: {
        id: 'the-huffington-post',
        name: 'The Huffington Post',
      },
      author: 'Josephine Harvey',
      title:
        "Trump Suggests Osama Bin Laden Wasn't That Big A Deal, Says He Only Had 'One Hit'",
      description:
        'Weeks before the 20th anniversary of 9/11, ex-President Donald Trump said the terrorist behind the 2001 attacks wasn\'t as bad as the "monsters" he took out.',
      url: 'https://www.huffpost.com/entry/donald-trump-osama-bin-laden-one-hit_n_61281559e4b01d0862eed896',
      urlToImage:
        'https://img.huffingtonpost.com/asset/6128194826000044d353f818.jpg?cache=tvofhrtgtl&ops=1778_1000',
      publishedAt: '2021-08-27T00:28:34Z',
      content:
        'With just weeks to go before the 20th anniversary of the Sept. 11 terrorist attacks, former President Donald Trump suggested the man behind them, Osama bin Laden, wasnt that bad and only had one hit.… [+2211 chars]',
    },
    {
      source: {
        id: 'nbc-news',
        name: 'NBC News',
      },
      author: 'Ben Collins, Brandy Zadrozny',
      title: 'Ivermectin demand drives some to pro-Trump telemedicine website',
      description:
        'Ivermectin is the hot new false cure in some Facebook and Reddit groups, where shortages are pushing some people to a pro-Trump telemedicine site.',
      url: 'https://www.nbcnews.com/tech/tech-news/ivermectin-demand-drives-trump-telemedicine-website-rcna1791',
      urlToImage:
        'https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2021-08/210826-ivermectin-facebook-covid-2x1-cs-4033d1.jpg',
      publishedAt: '2021-08-26T23:18:36Z',
      content:
        'When users visit the telemedicine website SpeakWithAnMD.com, they are immediately hit with a warning: Due to overwhelming demand, we are experiencing longer than usual wait times.\r\nThe demand is for … [+11463 chars]',
    },
    {
      source: {
        id: 'time',
        name: 'Time',
      },
      author: 'Vera Bergengruen',
      title:
        "How 'America's Frontline Doctors' Sold Access to Bogus COVID-19 Treatments—and Left Patients in the Lurch",
      description:
        'The pro-Trump group has nurtured the false beliefs of the right-wing anti-vaccine movement while finding ways to make money from its members',
      url: 'http://time.com/6092368/americas-frontline-doctors-covid-19-misinformation/',
      urlToImage:
        'https://api.time.com/wp-content/uploads/2021/08/ivermectin-americas-frontline-doctors-covid-19-01.jpg?quality=85&w=1200&h=628&crop=1',
      publishedAt: '2021-08-26T22:34:50Z',
      content:
        'Mike says he was struggling with COVID-19 when he felt his breathing getting worse. He did not want to go to the Veterans Affairs hospital near his home, where he believed doctors might put him on a … [+23123 chars]',
    },
    {
      source: {
        id: 'business-insider',
        name: 'Business Insider',
      },
      author: 'John Haltiwanger',
      title: "Trump says infamous terrorist Osama bin Laden 'only had one hit'",
      description:
        '"Osama bin Laden had one hit, and it was a bad one, in New York City, the World Trade Center," Trump said.',
      url: 'http://www.businessinsider.com/trump-says-osama-bin-laden-only-had-one-hit-2021-8',
      urlToImage:
        'https://i.insider.com/61280b3012b9cc0019631015?width=1200&format=jpeg',
      publishedAt: '2021-08-26T22:08:28Z',
      content:
        'Former President Donald Trump on Thursday said that the infamous terrorist leader Osama bin Laden "only had one hit," in a reference to the 9/11 terror attacks that killed 2,977 people in New York, P… [+2964 chars]',
    },
    {
      source: {
        id: 'business-insider-uk',
        name: 'Business Insider (UK)',
      },
      author: 'John Haltiwanger',
      title: "Trump says infamous terrorist Osama bin Laden 'only had one hit'",
      description:
        '"Osama bin Laden had one hit, and it was a bad one, in New York City, the World Trade Center," Trump said.',
      url: 'http://uk.businessinsider.com/trump-says-osama-bin-laden-only-had-one-hit-2021-8',
      urlToImage:
        'https://i.insider.com/61280b3012b9cc0019631015?width=1200&format=jpeg',
      publishedAt: '2021-08-26T22:08:28Z',
      content:
        'Former President Donald Trump on Thursday said that the infamous terrorist leader Osama bin Laden "only had one hit," in a reference to the 9/11 terror attacks that killed 2,977 people in New York, P… [+2964 chars]',
    },
    {
      source: {
        id: 'ansa',
        name: 'ANSA.it',
      },
      author: 'ANSA.it',
      title: 'Trump, ora Biden si deve dimettere - Ultima Ora',
      description:
        '"Joe Biden dovrebbe dimettersi, il che non dovrebbe essere un grosso problema dal momento che non è\r\nstato eletto legittimamente dal principio". Così ha scritto l\'ex presidente Donald Trump in un\r\nmessaggio agli elettori dopo l\'attentato a Kabul, in Afghanist…',
      url: 'http://www.ansa.it/sito/notizie/topnews/2021/08/26/trump-ora-biden-si-deve-dimettere_f2719bf6-0ed8-469b-806a-1714ec6ba683.html',
      urlToImage:
        'https://www.ansa.it/webimages/img_700/2021/7/7/4292d0f8b2bc4899fa779204312c6b2d.jpg',
      publishedAt: '2021-08-26T18:01:00Z',
      content:
        '(ANSA) - NEW YORK, 26 AGO - "Joe Biden dovrebbe dimettersi,\r\nil che non dovrebbe essere un grosso problema dal momento che\r\nnon è stato eletto legittimamente dal principio". Così ha\r\nscritto l\'ex pre… [+141 chars]',
    },
    {
      source: {
        id: 'the-hill',
        name: 'The Hill',
      },
      author: 'John Kruzel',
      title:
        'Capitol Police officers sue Trump, right-wing groups over Jan. 6 | TheHill',
      description:
        'Seven U.S. Capitol Police officers on Thursday filed a lawsuit against former Presiden...',
      url: 'http://thehill.com/regulation/court-battles/569551-capitol-police-officers-sue-trump-right-wing-groups-over-jan-6',
      urlToImage:
        'https://thehill.com/sites/default/files/capitol_riot_010621upi2_lead.jpg',
      publishedAt: '2021-08-26T16:06:23Z',
      content:
        'Seven U.S. Capitol Police officers on Thursday filed a lawsuit against former President TrumpDonald TrumpTrump accuses Jan. 6 panel of trying to distractJudge orders sanctions against Sidney Powell, … [+1266 chars]',
    },
    {
      source: {
        id: 'reddit-r-all',
        name: 'Reddit /r/all',
      },
      author: 'Kevin Breuninger',
      title:
        'Capitol Police officers sue Trump, Roger Stone, Proud Boys and others over Jan. 6 invasion',
      description:
        'Seven Capitol Police officers filed a lawsuit accusing former President Donald Trump and others of being directly responsible for the deadly riot on Jan. 6.',
      url: 'https://www.cnbc.com/2021/08/26/capitol-police-officers-sue-trump-roger-stone-proud-boys-over-jan-6-invasion.html',
      urlToImage:
        'https://image.cnbcfm.com/api/v1/image/106820319-16099755872021-01-06t231850z_1678560959_rc2n2l9p3cok_rtrmadp_0_usa-election-trump.jpeg?v=1629991904',
      publishedAt: '2021-08-26T15:51:20Z',
      content:
        'Seven U.S. Capitol Police officers filed a federal lawsuit Thursday accusing former President Donald Trump, far-right "violent extremist groups" and others of being directly responsible for the deadl… [+4099 chars]',
    },
    {
      source: {
        id: 'msnbc',
        name: 'MSNBC',
      },
      author: 'MSNBC',
      title:
        'Man sentenced to up to 10 years for shooting Black girl at Iowa Trump rally',
      description:
        'An Iowa man who shot into a car full of Black girls during a rally for then-president President Donald Trump last year was sentenced to up to 10 years in prison.',
      url: 'https://www.nbcnews.com/news/us-news/man-sentenced-10-years-shooting-black-girl-iowa-trump-rally-n1276391',
      urlToImage:
        'https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_01/2705191/nbc-social-default.png',
      publishedAt: '2021-08-10T05:59:10Z',
      content:
        'DES MOINES, Iowa A man was sentenced Monday to up to 10 years in prison for shooting into a car full of Black teenage girls after an Iowa rally for then-President Donald Trump, injuring one girl.\r\nMi… [+1658 chars]',
    },
    {
      source: {
        id: 'national-review',
        name: 'National Review',
      },
      author: 'Zachary Evans',
      title: 'Trump Hints at 2024 Run: ‘I’ll See You in Four Years’',
      description:
        '‘It’s been an amazing four years. We are trying to do another four years,’ Trump stated.',
      url: 'https://www.nationalreview.com/news/trump-hints-at-2024-run-ill-see-you-in-four-years/',
      urlToImage:
        'https://i2.wp.com/www.nationalreview.com/wp-content/uploads/2020/11/Donald-J-Trump.jpg?fit=1200%2C700&ssl=1',
      publishedAt: '2020-12-02T17:04:16Z',
      content:
        'President Donald Trump holds a campaign rally at Gerald R. Ford International Airport in Grand Rapids, Mich., November 3, 2020. (Carlos Barria/Reuters)\r\nPresident Trump hinted during a White House Ch… [+1639 chars]',
    },
    {
      source: {
        id: 'national-review',
        name: 'National Review',
      },
      author: 'Zachary Evans',
      title:
        'Senior Georgia Elections Official Slams Trump Rhetoric: ‘Someone’s Going to Get Killed’',
      description:
        'Trump has repeatedly alleged that Joe Biden won the state of Georgia through widespread voter fraud.',
      url: 'https://www.nationalreview.com/news/senior-georgia-elections-official-slams-trump-rhetoric-someones-going-to-get-killed/',
      urlToImage:
        'https://i0.wp.com/www.nationalreview.com/wp-content/uploads/2020/11/donald-trump-election-night.jpg?fit=1200%2C700&ssl=1',
      publishedAt: '2020-12-01T22:57:34Z',
      content:
        'President Donald Trump speaks about early results from the presidential election in the East Room of the White House, November 4, 2020.(Carlos Barria/Reuters)\r\nPresident Trump’s rhetoric regarding al… [+2574 chars]',
    },
    {
      source: {
        id: 'aftenposten',
        name: 'Aftenposten',
      },
      author: 'NTB-AP-AFP',
      title: 'Oberstløytnant som vitnet mot Trump, går av',
      description:
        'Oberstløytnant Alexander Vindman, som vitnet mot president Donald Trump i riksrettssaken, orker ikke mer mobbing og trekker seg fra hæren.',
      url: 'https://www.aftenposten.no/verden/i/y3QoOK/Oberstloytnant-som-vitnet-mot-Trump_-gar-av',
      urlToImage:
        'https://premium.vgc.no/ap/images/bd89d0be-e705-4c34-9d52-1a56b5059cd6?fit=crop&q=80&w=1440',
      publishedAt: '2020-07-09T05:07:25.190605Z',
      content:
        'smp-stories-top-widget\r\nVindman fikk sparken fra sin stilling i det nasjonale sikkerhetsrådet i Det hvite hus i februar, to dager etter at president Donald Trump ble frikjent.\r\nVindman lå an til forf… [+1055 chars]',
    },
    {
      source: {
        id: 'vice-news',
        name: 'Vice News',
      },
      author: 'David Gilbert',
      title:
        'Far-Right Social Network Gab Has a Verified Account Waiting For Trump With 27,000 Followers',
      description:
        'Gab users have been instructed to tweet at and write to the president urging him to join the network, which is filled with conspiracy theories, racism, and antisemitism.',
      url: 'https://www.vice.com/en_us/article/z3exw4/far-right-social-network-gab-has-a-verified-account-waiting-for-trump-with-27000-followers',
      urlToImage:
        'https://video-images.vice.com/test-uploads/articles/5ecfac1d185c22009661743b/lede/1590670574578-AP_20143569698255.jpeg?crop=1xw:0.8427xh;0xw,0.1573xh&resize=1200:*',
      publishedAt: '2020-05-28T13:56:57Z',
      content:
        'Want the best of VICE News straight to your inbox? Sign up here.\r\n As President Donald Trump fumes at Twitters decision to fact-check two of his tweets this week, a ready-made replacement social netw… [+3512 chars]',
    },
    {
      source: {
        id: 'vice-news',
        name: 'Vice News',
      },
      author: 'Carter Sherman',
      title:
        "Trump's FDA Won't Let Women Get Abortion Pills Remotely In a Pandemic. So The ACLU Is Suing.",
      description:
        "Pregnant people have make an in-person visit to pick up the pill — even if they've already seen a provider about getting an abortion.",
      url: 'https://www.vice.com/en_us/article/935yq7/trumps-fda-wont-let-women-get-abortion-pills-remotely-in-a-pandemic-so-the-aclu-is-suing',
      urlToImage:
        'https://video-images.vice.com/test-uploads/articles/5eceae1504ee25009b133490/lede/1590603286527-AbortionPills.jpeg?crop=1xw:0.8425xh;0xw,0.1425xh&resize=1200:*',
      publishedAt: '2020-05-27T18:43:49Z',
      content:
        'As the coronavirus pandemic ground almost every U.S. industry to a standstill, the Trump administration urged healthcare professionals to use telemedicine to see patients remotely and stem the spread… [+4029 chars]',
    },
  ];
  constructor() {
    super();
    this.state = {
      articles: [],
      page : 1,
      totalResults:0
    };
  }
  async componentDidMount(){
    let data = await fetch('https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=e75c21ec1a0b418d9c217b023319f822&page=1&pageSize=20');
    let parsedData = await data.json();
    this.setState({
      articles : parsedData.articles,
      totalResults: parsedData.totalResults
    })
    console.log(this.state)
  }
  handlePrevClick = async ()=>{
    let data = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=e75c21ec1a0b418d9c217b023319f822&page=${this.state.page - 1}&pageSize=20`);
    let parsedData = await data.json();
    this.setState({
      articles : parsedData.articles,
      page : this.state.page - 1
    })

}

handleNextClick = async ()=>{
    if (this.state.page + 1 > Math.ceil(this.state.totalResults/20)){

    }
    else{
    let data = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=e75c21ec1a0b418d9c217b023319f822&page=${this.state.page + 1}&pageSize=20`);
    let parsedData = await data.json();
    this.setState({
      articles : parsedData.articles,
      page : this.state.page + 1
    })
  }
}


  render() {
    return (
      <div className='container'>
        <h1>NEWSBES : Get latest News</h1>
        <div className='row my-3'>
          {this.state.articles.map((element) => (
            <div className='col-md-4' key={element.url}>
              <NewsItem
                title={element.title}
                description={element.description}
                newsUrl={element.url}
                imageUrl={element.urlToImage}
              />
            </div>
          ))}
        </div>
        <div className="container d-flex justify-content-between">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
        <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
      
    );
  }
}
