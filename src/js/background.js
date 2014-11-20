// Background feature
function isValidDate(d) {
  if ( Object.prototype.toString.call(d) !== "[object Date]" ) {
    return false;
  }
  return !isNaN(d.getTime());
};

var backgroundJSON = {
    "backgrounds": [
        {
            "accent": "rgb(120, 126, 181)",
            "filename": "01.jpg",
            "source": "Dave Morrow",
            "sourceUrl": "https://www.flickr.com/photos/daves-f-stop/8079071366",
            "title": "La Push, Washington, USA"
        },
        {
            "accent": "rgb(212, 162, 87)",
            "filename": "02.jpg",
            "source": "Magdalena Roeseler",
            "sourceUrl": "https://www.flickr.com/photos/magdalenaroeseler/10497301253",
            "title": "Zug, Switzerland"
        },
        {
            "accent": "rgb(77, 120, 99)",
            "filename": "03.jpg",
            "source": "Stian Klo",
            "sourceUrl": "http://500px.com/photo/41198398/h%C3%B8yvika-beach-by-stian-klo",
            "title": "And\u00f8ya, Norway"
        },
        {
            "accent": "rgb(237, 150, 131)",
            "filename": "04.jpg",
            "source": "skoeber",
            "sourceUrl": "https://www.flickr.com/photos/asphericlens/6345711358",
            "title": "Saxon Switzerland, Germany"
        },
        {
            "accent": "rgb(180, 108, 72)",
            "filename": "05.jpg",
            "source": "skoeber",
            "sourceUrl": "https://www.flickr.com/photos/asphericlens/14366773224",
            "title": "Saxon Switzerland, Germany"
        },
        {
            "accent": "rgb(232, 185, 49)",
            "filename": "06.jpg",
            "source": "skoeber",
            "sourceUrl": "https://www.flickr.com/photos/asphericlens/7160610404",
            "title": "Saxony, Germany"
        },
        {
            "accent": "rgb(190, 130, 61)",
            "filename": "07.jpg",
            "source": "Submit Source",
            "sourceUrl": "mailto:feedback@momentumdash.com",
            "title": "(Source Unknown)"
        },
        {
            "accent": "rgb(180, 84, 44)",
            "filename": "08.jpg",
            "source": "Jes\u00fas Ignacio Bravo Soler",
            "sourceUrl": "http://500px.com/photo/68800189/singular-by-jes%C3%BAs-ignacio-bravo-soler",
            "title": "Otzarreta Forest, Spain"
        },
        {
            "accent": "rgb(191, 96, 109)",
            "filename": "09.jpg",
            "source": "Dave Morrow",
            "sourceUrl": "https://www.flickr.com/photos/daves-f-stop/9593394811",
            "title": "Palouse Falls, Washington, USA"
        },
        {
            "accent": "rgb(154, 150, 199)",
            "filename": "10.jpg",
            "source": "Dave Morrow",
            "sourceUrl": "https://www.flickr.com/photos/daves-f-stop/11713436133",
            "title": "San Francisco, California, USA"
        },
        {
            "accent": "rgb(168, 212, 39)",
            "filename": "11.jpg",
            "source": "Dave Morrow",
            "sourceUrl": "https://www.flickr.com/photos/daves-f-stop/8272381830",
            "title": "Auster-Skaftafellssysla, Iceland"
        },
        {
            "accent": "rgb(60, 164, 180)",
            "filename": "12.jpg",
            "source": "Chris Zielecki",
            "sourceUrl": "https://www.flickr.com/photos/zanthia/7870409330",
            "title": "Hvide Sande, Denmark"
        },
        {
            "accent": "rgb(181, 86, 58)",
            "filename": "13.jpg",
            "source": "skoeber",
            "sourceUrl": "https://www.flickr.com/photos/asphericlens/7227178308",
            "title": "Paptsdorf, Germany"
        },
        {
            "accent": "rgb(61, 108, 180)",
            "filename": "14.jpg",
            "source": "Trey Ratcliff",
            "sourceUrl": "https://www.flickr.com/photos/stuckincustoms/3124621920",
            "title": "Teton Range, Wyoming, USA"
        },
        {
            "filename": "15.jpg",
            "source": "Trey Ratcliff",
            "sourceUrl": "https://www.flickr.com/photos/stuckincustoms/8704121860/",
            "title": "Tokyo, Japan"
        },
        {
            "filename": "16.jpg",
            "source": "Trey Ratcliff",
            "sourceUrl": "https://www.flickr.com/photos/stuckincustoms/11114091294/",
            "title": "Li Jiang, China"
        },
        {
            "filename": "17.jpg",
            "source": "Trey Ratcliff",
            "sourceUrl": "https://www.flickr.com/photos/stuckincustoms/11783297005/",
            "title": "Hobbiton, New Zealand"
        },
        {
            "filename": "18.jpg",
            "source": "Trey Ratcliff",
            "sourceUrl": "https://www.flickr.com/photos/stuckincustoms/8686957036/",
            "title": "Sydney, Australia"
        },
        {
            "filename": "19.jpg",
            "source": "Cristian Ruberti",
            "sourceUrl": "https://www.flickr.com/photos/ambsab/11197203555/in/pool-2179950@N25/",
            "title": "Monte Sagro, Italy"
        },
        {
            "filename": "20.jpg",
            "source": "invno1",
            "sourceUrl": "http://www.reddit.com/r/EarthPorn/comments/2fbuw4/mt_jefferson_taken_from_the_pacific_crest_trail_3/",
            "title": "Mt. Jefferson, Oregon, USA"
        },
        {
            "filename": "21.jpg",
            "source": "Trey Ratcliff",
            "sourceUrl": "https://www.flickr.com/photos/stuckincustoms/8498614095",
            "title": "Glenorchy, New Zealand"
        },
        {
            "filename": "22.jpg",
            "source": "Trey Ratcliff",
            "sourceUrl": "https://www.flickr.com/photos/stuckincustoms/6961023258",
            "title": "Oahu, Hawaii"
        },
        {
            "filename": "23.jpg",
            "source": "Trey Ratcliff",
            "sourceUrl": "https://www.flickr.com/photos/stuckincustoms/12933604573/",
            "title": "Virgin Gorda, Virgin Islands"
        },
        {
            "filename": "24.jpg",
            "source": "Romain Guy",
            "sourceUrl": "https://www.flickr.com/photos/romainguy/3409068082/",
            "title": "San Francisco, California, USA"
        },
        {
            "filename": "25.jpg",
            "source": "Romain Guy",
            "sourceUrl": "https://www.flickr.com/photos/romainguy/8338439169/",
            "title": "Antelope Canyon, Arizona, USA"
        },
        {
            "filename": "26.jpg",
            "source": "Romain Guy",
            "sourceUrl": "https://www.flickr.com/photos/romainguy/6840341477/",
            "title": "Kalalu, Hawaii, USA"
        },
        {
            "filename": "27.jpg",
            "source": "David Cantu",
            "sourceUrl": "http://500px.com/photo/37449470/-the-view-from-jalama-bluffs-by-david-cantu",
            "title": "Point Arbuello, California, USA"
        },
        {
            "filename": "28.jpg",
            "source": "Steve Dunleavy",
            "sourceUrl": "https://www.flickr.com/photos/stevedunleavy/5192342061/",
            "title": "Grand Canyon, Arizona, USA"
        },
        {
            "filename": "29.jpg",
            "source": "Conor MacNeill",
            "sourceUrl": "http://500px.com/photo/18655061/yangshuo-cyclist-by-conor-macneill",
            "title": "Guilin, China"
        },
        {
            "filename": "30.jpg",
            "source": "Steve Dunleavy",
            "sourceUrl": "https://www.flickr.com/photos/stevedunleavy/5044329063/",
            "title": "Yosemite, California, USA"
        },
        {
            "filename": "31.jpg",
            "source": "Jyrki Salmi",
            "sourceUrl": "http://www.flickr.com/photos/salman2000/9321259912",
            "title": "<i>Stunted Pine</i>"
        },
        {
            "filename": "32.jpg",
            "source": "Trey Ratcliff",
            "sourceUrl": "https://www.flickr.com/photos/stuckincustoms/8468378029",
            "title": "Great Wall of China"
        },
        {
            "filename": "33.jpg",
            "source": "Trey Ratcliff",
            "sourceUrl": "https://www.flickr.com/photos/stuckincustoms/12375331335",
            "title": "Crater Lake, Oregon, USA"
        },
        {
            "filename": "34.jpg",
            "source": "Adrian Simionov",
            "sourceUrl": "http://500px.com/photo/63850509/the-place-of-no-words-by-adrian-simionov",
            "title": "Queenstown, New Zealand"
        },
        {
            "filename": "35.jpg",
            "impressionUrl": "http://bs.serving-sys.com/BurstingPipe/adServer.bs?cn=tf&c=19&mc=imp&pli=11490069&PluID=0&ord=[timestamp]&rtu=-1",
            "shutterstockPromo": true,
            "source": "Photo by <img src='img/shutterstock.png'>",
            "sourceUrl": "http://bs.serving-sys.com/BurstingPipe/adServer.bs?cn=tf&c=20&mc=click&pli=11490069&PluID=0&ord=[timestamp]",
            "title": "Takamaka, Seychelles"
        },
        {
            "filename": "36.jpg",
            "impressionUrl": "http://bs.serving-sys.com/BurstingPipe/adServer.bs?cn=tf&c=19&mc=imp&pli=11490070&PluID=0&ord=[timestamp]&rtu=-1",
            "shutterstockPromo": true,
            "source": "Photo by <img src='img/shutterstock.png'>",
            "sourceUrl": "http://bs.serving-sys.com/BurstingPipe/adServer.bs?cn=tf&c=20&mc=click&pli=11490070&PluID=0&ord=[timestamp]",
            "title": "Bogliasco, Italy"
        },
        {
            "filename": "37.jpg",
            "impressionUrl": "http://bs.serving-sys.com/BurstingPipe/adServer.bs?cn=tf&c=19&mc=imp&pli=11490071&PluID=0&ord=[timestamp]&rtu=-1",
            "shutterstockPromo": true,
            "source": "Photo by <img src='img/shutterstock.png'>",
            "sourceUrl": "http://bs.serving-sys.com/BurstingPipe/adServer.bs?cn=tf&c=20&mc=click&pli=11490071&PluID=0&ord=[timestamp]",
            "title": "Bali, Indonesia"
        },
        {
            "filename": "38.jpg",
            "impressionUrl": "http://bs.serving-sys.com/BurstingPipe/adServer.bs?cn=tf&c=19&mc=imp&pli=10918572&PluID=0&ord=[timestamp]&rtu=-1",
            "shutterstockPromo": true,
            "source": "Photo by <img src='img/shutterstock.png'>",
            "sourceUrl": "http://bs.serving-sys.com/BurstingPipe/adServer.bs?cn=tf&c=20&mc=click&pli=10918572&PluID=0&ord=[timestamp]",
            "title": "Lucerne Lake, Switzerland"
        },
        {
            "filename": "39.jpg",
            "impressionUrl": "http://bs.serving-sys.com/BurstingPipe/adServer.bs?cn=tf&c=19&mc=imp&pli=11490181&PluID=0&ord=[timestamp]&rtu=-1",
            "shutterstockPromo": true,
            "source": "Photo by <img src='img/shutterstock.png'>",
            "sourceUrl": "http://bs.serving-sys.com/BurstingPipe/adServer.bs?cn=tf&c=20&mc=click&pli=11490181&PluID=0&ord=[timestamp]",
            "title": "Leh-Manali, Kashmir, India"
        },
        {
            "filename": "40.jpg",
            "impressionUrl": "http://bs.serving-sys.com/BurstingPipe/adServer.bs?cn=tf&c=19&mc=imp&pli=11490183&PluID=0&ord=[timestamp]&rtu=-1",
            "shutterstockPromo": true,
            "source": "Photo by <img src='img/shutterstock.png'>",
            "sourceUrl": "http://bs.serving-sys.com/BurstingPipe/adServer.bs?cn=tf&c=20&mc=click&pli=11490183&PluID=0&ord=[timestamp]",
            "title": "Vernazza, Italy"
        }
    ]
};

// Models
dateModel = Backbone.Model.extend({
    defaults: function () {
        var date = new Date();
        var hour12clock = JSON.parse(localStorage.hour12clock);
        return {
            date: date,
            hour12clock: hour12clock
        };
    },
    initialize: function(){
        this.listenTo(this, 'change:date', this.updateTime, this);
    },
    getTimeString: function(date) {
        var hour12clock = this.get('hour12clock');
        date = date || this.get('date');
        var hour = date.getHours();
        var minute = date.getMinutes();
        if (hour12clock == true) {
            hour = ((hour + 11) % 12 + 1);
        }
        if (hour < 10 && !hour12clock) { hour = "0" + hour; }
        if (minute < 10) { minute = "0" + minute; }
        return hour + ':' + minute;
    },
    getTimePeriod: function() {
        if (this.get('date').getHours() >= 12) { return 'PM'; } else { return 'AM' };
    },
    updateTime: function() {
        var now = this.getTimeString();
        if (this.get('time') != now) {
            this.set('time', now);
        }
    }
});

var backgroundModel = Backbone.Model.extend({
    parse: function(response) {
        this.set({ 'filename': response.filename, 'title': response.title, 'source': response.source, 'sourceUrl': response.sourceUrl, 'shutterstockPromo': response.shutterstockPromo, 'impressionUrl': response.impressionUrl });
    }
});


// Collections

var backgroundsCollection = Backbone.Collection.extend({
    model: backgroundModel,
    url: 'js/backgrounds.json',
    parse: function (response) {
        return response.backgrounds;
    }
});


// Views

var backgroundView = Backbone.View.extend({
    tagName: 'li',
    attributes: {  },
    events: {
        'click': 'closeTrays'
    },
    // JO: Testing setting background without a template
    //template: Handlebars.compile( $("#background-template").html() ),
    initialize: function () {
        this.render();
        this.listenTo(m, 'newDay', this.loadNewBg, this);
    },
    render: function () {
        var that = this;
        var index = window.localStorage['background'];
        if (!index || Number(index)+1 > this.collection.length) {
            localStorage.backgrounds = '[]';
            index = this.getNewIndex();
        }
        // make sure shutterstock promo only shows US on update
        var background = backgroundsCollection.at(index);
        if (background.attributes.shutterstockPromo === true && localStorage.country !== 'US') {
            localStorage.backgrounds = '[]';
            index = this.getNewIndex();
        }

        window.localStorage['background'] = index;
        var filename = this.collection.at(index).get('filename');
        var title = this.collection.at(index).get('title');
        var source = this.collection.at(index).get('source');
        var sourceUrl = this.collection.at(index).get('sourceUrl');
        var order = (this.options.order || 'append') + 'To';
        var impressionUrl = this.collection.at(index).get('impressionUrl');

        // JO: Hack to get the backgrounds to fade between each other; replace with background subviews and separate LIs
        $('#background').css('background-image',$('#background').find('li').css('background-image'));

        // JO: Make sure the background image loads before displaying (even locally there can be a small delay)
        $('<img/>').attr('src', 'backgrounds/' + filename).load(function() {
            that.$el[order]('#' + that.options.region).css('background-image','url(backgrounds/' + filename + ')').addClass('fadein');
            $(this).remove();
            $('.widgets').addClass('fadein');
            $('.background-overlay').addClass('fadein');
        });

        // Shutterstock tracking pixel
        if (impressionUrl) {
            $('body').append('<img src="'+impressionUrl+'">');
        }
    },
    loadNewBg: function () {
        // attempting to solve the race condition where multiple tabs are open
        var now = new Date();
        var backgroundUpdate = new Date(localStorage.backgroundUpdate);

        if (Date.parse(now) > Date.parse(backgroundUpdate) || !isValidDate(backgroundUpdate)) {
            localStorage.backgroundUpdate = now;
            var index = this.getNewIndex();
            localStorage.background = index;

            // Remove
            backgroundInfoView.remove();

            // Create new background info widget for new background
            backgroundInfoViewInstance = new BackgroundInfoView({
                region: 'bottom-left',
                title: this.collection.at(index).get('title'),
                source: this.collection.at(index).get('source'),
                sourceUrl: this.collection.at(index).get('sourceUrl')
            });

            // m.widgets.push(backgroundInfoViewInstance);
        }

        this.render();
    },
    getNewIndex: function () {

        var currentIndex = localStorage.background;
        var backgrounds = JSON.parse(localStorage.backgrounds || "[]");

        // Get new background index from background that isn't the current one
        var newBackground = null;
        while (newBackground === null || Number(newBackground)+1 > this.collection.length) {

            // Repopulate backgrounds array if new or empty
            if (backgrounds.length === 0) {
                backgrounds = Object.keys(backgroundsCollection.models);
            }

            var newIndex = Math.floor(Math.random()*backgrounds.length);

            // Ensure we don't get duplicate image when we regenerate backgrounds buffer array
            while (currentIndex === newIndex) {
                newIndex = Math.floor(Math.random()*backgrounds.length);
            }

            // Cut the chosen background out of the backgrounds array
            newBackground = backgrounds.splice(newIndex, 1)[0];
        }

        // Save the modified backgrounds array
        localStorage.backgrounds = JSON.stringify(backgrounds);

        // If we aren't in the US, need to make sure that we don't get
        // a promo photo.
        var background = backgroundsCollection.at(newBackground);
        if (background.attributes.shutterstockPromo === true && localStorage.country !== 'US') {
            var newBackground = this.getNewIndex();
        }

        return newBackground;
    },
    closeTrays: function (e) {
        console.log('here');
        $('.show').each(function () {
            removeClass('show');
        });
    }
});

var backgroundInfoView = Backbone.View.extend({
    tagName: 'div',
    attributes: { id: 'background-info', class: 'light' },
    template: Handlebars.compile($("#background-info-template").html()),
    events: {
        "mouseenter": "handleHover",
        "click .source-url": "trackClick"
    },
    initialize: function () {
        this.render();
    },
    render: function () {
        var title = this.options.title;
        if (!title) {
            title = "";
            this.$el.addClass('title-unknown');
        }
        var source = this.options.source
        if (!source) {
            source = "";
            this.$el.addClass('source-unknown');
        }
        var sourceUrl = this.options.sourceUrl;
        var context = { title: title, source: source, sourceUrl: sourceUrl };

        var order = (this.options.order  || 'append') + 'To';
        this.$el[order]('#' + this.options.region).fadeTo(0, 0).html(this.template(context)).fadeTo(500, 1);
        return this;
    },
    handleHover: function() {
        ga('send', 'event', 'BackgroundInfo', 'Hover');
    },
    trackClick: function() {
        ga('send', 'event', 'BackgroundInfo', 'Click', localStorage.background);
    }
});
