var linkedin = angular.module('linkedinLite.profile', ['ngRoute']);

linkedin.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/linkedin-profile', {
        templateUrl: 'view/linkedin-profile.html',
        controller: 'ProfileCtrl'
    });
}]);

linkedin.controller('ProfileCtrl', function ($scope, $http, $firebaseObject) {

    // Get data
    var ref = new Firebase("https://1312276-auth.firebaseio.com");

    if (!ref.getAuth())
    {
        window.location = '#sign-in';
        return;
    }

    $scope.background = $firebaseObject(ref);



    $scope.signOut = function () {
        ref.unauth();
        console.log("User has just logged out");
        window.location = '#sign-in';
    }

    // Profile card

    $scope.editAvatar = function () {
        $scope.newAvatarURL = angular.copy($scope.background.profile.avatar);
    }

    $scope.saveAvatar = function () {
        $scope.background.profile.avatar = $scope.newAvatarURL;
    }

    $scope.editName = function () {
        $scope.newFirstName = angular.copy($scope.background.profile.firstName);
        $scope.newLastName = angular.copy($scope.background.profile.lastName);
    }

    $scope.editHeadline = function () {
        $scope.newHeadline = angular.copy($scope.background.profile.headline);
    }

    $scope.editLocation = function () {
        $scope.newCountry = "vn";
        $scope.newIndustry = "4";
    }

    $scope.saveName = function() {
        $scope.background.profile.firstName = $scope.newFirstName;
        $scope.background.profile.lastName = $scope.newLastName;
    };

    $scope.saveHeadline = function() {
        $scope.background.profile.headline = $scope.newHeadline;
    };

    $scope.countryCode = {
        "us": "United States",
        "af": "Afghanistan",
        "ax": "Aland Islands",
        "al": "Albania",
        "dz": "Algeria",
        "as": "American Samoa",
        "ad": "Andorra",
        "ao": "Angola",
        "ai": "Anguilla",
        "aq": "Antarctica",
        "ag": "Antigua and Barbuda",
        "ar": "Argentina",
        "am": "Armenia",
        "aw": "Aruba",
        "au": "Australia",
        "at": "Austria",
        "az": "Azerbaijan",
        "bs": "Bahamas",
        "bh": "Bahrain",
        "bd": "Bangladesh",
        "bb": "Barbados",
        "by": "Belarus",
        "be": "Belgium",
        "bz": "Belize",
        "bj": "Benin",
        "bm": "Bermuda",
        "bt": "Bhutan",
        "bo": "Bolivia",
        "ba": "Bosnia and Herzegovina",
        "bw": "Botswana",
        "bv": "Bouvet Island",
        "br": "Brazil",
        "io": "British Indian Ocean Territory",
        "bn": "Brunei Darussalam",
        "bg": "Bulgaria",
        "bf": "Burkina Faso",
        "bi": "Burundi",
        "kh": "Cambodia",
        "cm": "Cameroon",
        "ca": "Canada",
        "cv": "Cape Verde",
        "cb": "Caribbean Nations",
        "ky": "Cayman Islands",
        "cf": "Central African Republic",
        "td": "Chad",
        "cl": "Chile",
        "cn": "China",
        "cx": "Christmas Island",
        "cc": "Cocos (Keeling) Islands",
        "co": "Colombia",
        "km": "Comoros",
        "cg": "Congo",
        "ck": "Cook Islands",
        "cr": "Costa Rica",
        "ci": "Cote D’Ivoire (Ivory Coast)",
        "hr": "Croatia",
        "cu": "Cuba",
        "cy": "Cyprus",
        "cz": "Czech Republic",
        "cd": "Democratic Republic of the Congo",
        "dk": "Denmark",
        "dj": "Djibouti",
        "dm": "Dominica",
        "do": "Dominican Republic",
        "tp": "East Timor",
        "ec": "Ecuador",
        "eg": "Egypt",
        "sv": "El Salvador",
        "gq": "Equatorial Guinea",
        "er": "Eritrea",
        "ee": "Estonia",
        "et": "Ethiopia",
        "fk": "Falkland Islands (Malvinas)",
        "fo": "Faroe Islands",
        "fm": "Federated States of Micronesia",
        "fj": "Fiji",
        "fi": "Finland",
        "fr": "France",
        "gf": "French Guiana",
        "pf": "French Polynesia",
        "tf": "French Southern Territories",
        "ga": "Gabon",
        "gm": "Gambia",
        "ge": "Georgia",
        "de": "Germany",
        "gh": "Ghana",
        "gi": "Gibraltar",
        "gr": "Greece",
        "gl": "Greenland",
        "gd": "Grenada",
        "gp": "Guadeloupe",
        "gu": "Guam",
        "gt": "Guatemala",
        "gg": "Guernsey",
        "gn": "Guinea",
        "gw": "Guinea-Bissau",
        "gy": "Guyana",
        "ht": "Haiti",
        "hm": "Heard Island and McDonald Islands",
        "hn": "Honduras",
        "hk": "Hong Kong",
        "hu": "Hungary",
        "is": "Iceland",
        "in": "India",
        "id": "Indonesia",
        "ir": "Iran",
        "iq": "Iraq",
        "ie": "Ireland",
        "im": "Isle of Man",
        "il": "Israel",
        "it": "Italy",
        "jm": "Jamaica",
        "jp": "Japan",
        "je": "Jersey",
        "jo": "Jordan",
        "kz": "Kazakhstan",
        "ke": "Kenya",
        "ki": "Kiribati",
        "kr": "Korea",
        "kp": "Korea (North)",
        "ko": "Kosovo",
        "kw": "Kuwait",
        "kg": "Kyrgyzstan",
        "la": "Laos",
        "lv": "Latvia",
        "lb": "Lebanon",
        "ls": "Lesotho",
        "lr": "Liberia",
        "ly": "Libya",
        "li": "Liechtenstein",
        "lt": "Lithuania",
        "lu": "Luxembourg",
        "mo": "Macao",
        "mk": "Macedonia",
        "mg": "Madagascar",
        "mw": "Malawi",
        "my": "Malaysia",
        "mv": "Maldives",
        "ml": "Mali",
        "mt": "Malta",
        "mh": "Marshall Islands",
        "mq": "Martinique",
        "mr": "Mauritania",
        "mu": "Mauritius",
        "yt": "Mayotte",
        "mx": "Mexico",
        "md": "Moldova",
        "mc": "Monaco",
        "mn": "Mongolia",
        "me": "Montenegro",
        "ms": "Montserrat",
        "ma": "Morocco",
        "mz": "Mozambique",
        "mm": "Myanmar",
        "na": "Namibia",
        "nr": "Nauru",
        "np": "Nepal",
        "nl": "Netherlands",
        "an": "Netherlands Antilles",
        "nc": "New Caledonia",
        "nz": "New Zealand",
        "ni": "Nicaragua",
        "ne": "Niger",
        "ng": "Nigeria",
        "nu": "Niue",
        "nf": "Norfolk Island",
        "mp": "Northern Mariana Islands",
        "no": "Norway",
        "pk": "Pakistan",
        "pw": "Palau",
        "ps": "Palestinian Territory",
        "pa": "Panama",
        "pg": "Papua New Guinea",
        "py": "Paraguay",
        "pe": "Peru",
        "ph": "Philippines",
        "pn": "Pitcairn",
        "pl": "Poland",
        "pt": "Portugal",
        "pr": "Puerto Rico",
        "qa": "Qatar",
        "re": "Reunion",
        "ro": "Romania",
        "ru": "Russian Federation",
        "rw": "Rwanda",
        "gs": "S. Georgia and S. Sandwich Islands",
        "sh": "Saint Helena",
        "kn": "Saint Kitts and Nevis",
        "lc": "Saint Lucia",
        "pm": "Saint Pierre and Miquelon",
        "vc": "Saint Vincent and the Grenadines",
        "ws": "Samoa",
        "sm": "San Marino",
        "st": "Sao Tome and Principe",
        "sa": "Saudi Arabia",
        "sn": "Senegal",
        "rs": "Serbia",
        "cs": "Serbia and Montenegro",
        "sc": "Seychelles",
        "sl": "Sierra Leone",
        "sg": "Singapore",
        "sk": "Slovak Republic",
        "si": "Slovenia",
        "sb": "Solomon Islands",
        "so": "Somalia",
        "za": "South Africa",
        "ss": "South Sudan",
        "es": "Spain",
        "lk": "Sri Lanka",
        "sd": "Sudan",
        "om": "Sultanate of Oman",
        "sr": "Suriname",
        "sj": "Svalbard and Jan Mayen",
        "sz": "Swaziland",
        "se": "Sweden",
        "ch": "Switzerland",
        "sy": "Syria",
        "tw": "Taiwan",
        "tj": "Tajikistan",
        "tz": "Tanzania",
        "th": "Thailand",
        "tl": "Timor-Leste",
        "tg": "Togo",
        "tk": "Tokelau",
        "to": "Tonga",
        "tt": "Trinidad and Tobago",
        "tn": "Tunisia",
        "tr": "Turkey",
        "tm": "Turkmenistan",
        "tc": "Turks and Caicos Islands",
        "tv": "Tuvalu",
        "ug": "Uganda",
        "ua": "Ukraine",
        "ae": "United Arab Emirates",
        "gb": "United Kingdom",
        "uy": "Uruguay",
        "uz": "Uzbekistan",
        "vu": "Vanuatu",
        "va": "Vatican City State (Holy See)",
        "ve": "Venezuela",
        "vn": "Vietnam",
        "vg": "Virgin Islands (British)",
        "vi": "Virgin Islands (U.S.)",
        "wf": "Wallis and Futuna",
        "eh": "Western Sahara",
        "ye": "Yemen",
        "zm": "Zambia",
        "zw": "Zimbabwe",
        "oo": "Other"
    };

    $scope.industryCode = {
        "47": "Accounting",
        "94": "Airlines/Aviation",
        "120": "Alternative Dispute Resolution",
        "125": "Alternative Medicine",
        "127": "Animation",
        "19": "Apparel &amp; Fashion",
        "50": "Architecture &amp; Planning",
        "111": "Arts and Crafts",
        "53": "Automotive",
        "52": "Aviation &amp; Aerospace",
        "41": "Banking",
        "12": "Biotechnology",
        "36": "Broadcast Media",
        "49": "Building Materials",
        "138": "Business Supplies and Equipment",
        "129": "Capital Markets",
        "54": "Chemicals",
        "90": "Civic & Social Organization",
        "51": "Civil Engineering",
        "128": "Commercial Real Estate",
        "118": "Computer &amp; Network Security",
        "109": "Computer Games",
        "3": "Computer Hardware",
        "5": "Computer Networking",
        "4": "Computer Software",
        "48": "Construction",
        "24": "Consumer Electronics",
        "25": "Consumer Goods",
        "91": "Consumer Services",
        "18": "Cosmetics",
        "65": "Dairy",
        "1": "Defense & Space",
        "99": "Design",
        "69": "Education Management",
        "132": "E-Learning",
        "112": "Electrical/Electronic Manufacturing",
        "28": "Entertainment",
        "86": "Environmental Services",
        "110": "Events Services",
        "76": "Executive Office",
        "122": "Facilities Services",
        "63": "Farming",
        "43": "Financial Services",
        "38": "Fine Art",
        "66": "Fishery",
        "34": "Food &amp; Beverages",
        "23": "Food Production",
        "101": "Fund-Raising",
        "26": "Furniture",
        "29": "Gambling & Casinos",
        "145": "Glass, Ceramics &amp; Concrete",
        "75": "Government Administration",
        "148": "Government Relations",
        "140": "Graphic Design",
        "124": "Health, Wellness and Fitness",
        "68": "Higher Education",
        "14": "Hospital & Health Care",
        "31": "Hospitality",
        "137": "Human Resources",
        "134": "Import and Export",
        "88": "Individual & Family Services",
        "147": "Industrial Automation",
        "84": "Information Services",
        "96": "Information Technology and Services",
        "42": "Insurance",
        "74": "International Affairs",
        "141": "International Trade and Development",
        "6": "Internet",
        "45": "Investment Banking",
        "46": "Investment Management",
        "73": "Judiciary",
        "77": "Law Enforcement",
        "9": "Law Practice",
        "10": "Legal Services",
        "72": "Legislative Office",
        "30": "Leisure, Travel & Tourism",
        "85": "Libraries",
        "116": "Logistics and Supply Chain",
        "143": "Luxury Goods & Jewelry",
        "55": "Machinery",
        "11": "Management Consulting",
        "95": "Maritime",
        "80": "Marketing and Advertising",
        "97": "Market Research",
        "135": "Mechanical or Industrial Engineering",
        "126": "Media Production",
        "17": "Medical Devices",
        "13": "Medical Practice",
        "139": "Mental Health Care",
        "71": "Military",
        "56": "Mining & Metals",
        "35": "Motion Pictures and Film",
        "37": "Museums and Institutions",
        "115": "Music",
        "114": "Nanotechnology",
        "81": "Newspapers",
        "100": "Nonprofit Organization Management",
        "57": "Oil & Energy",
        "113": "Online Media",
        "123": "Outsourcing/Offshoring",
        "87": "Package/Freight Delivery",
        "146": "Packaging and Containers",
        "61": "Paper & Forest Products",
        "39": "Performing Arts",
        "15": "Pharmaceuticals",
        "131": "Philanthropy",
        "136": "Photography",
        "117": "Plastics",
        "107": "Political Organization",
        "67": "Primary/Secondary Education",
        "83": "Printing",
        "105": "Professional Training & Coaching",
        "102": "Program Development",
        "79": "Public Policy",
        "98": "Public Relations and Communications",
        "78": "Public Safety",
        "82": "Publishing",
        "62": "Railroad Manufacture",
        "64": "Ranching",
        "44": "Real Estate",
        "40": "Recreational Facilities and Services",
        "89": "Religious Institutions",
        "144": "Renewables & Environment",
        "70": "Research",
        "32": "Restaurants",
        "27": "Retail",
        "121": "Security and Investigations",
        "7": "Semiconductors",
        "58": "Shipbuilding",
        "20": "Sporting Goods",
        "33": "Sports",
        "104": "Staffing and Recruiting",
        "22": "Supermarkets",
        "8": "Telecommunications",
        "60": "Textiles",
        "130": "Think Tanks",
        "21": "Tobacco",
        "108": "Translation and Localization",
        "92": "Transportation/Trucking/Railroad",
        "59": "Utilities",
        "106": "Venture Capital & Private Equity",
        "16": "Veterinary",
        "93": "Warehousing",
        "133": "Wholesale",
        "142": "Wine and Spirits",
        "119": "Wireless",
        "103": "Writing and Editing"
    };

    $scope.saveCountryIndustry = function () {
        $scope.background.profile.location = $scope.countryCode[$scope.newCountry];
        $scope.background.profile.industry = $scope.industryCode[$scope.newIndustry];
    };

    // Summary

    $scope.editSummary = function () {
        $scope.summaryTexarea = angular.copy($scope.background.summary).replace(/<br \/>/gi, "\n");
    };

    $scope.saveSummary = function () {
        $scope.background.summary = $scope.summaryTexarea.replace(/\n/gi, "<br />");
    };

    sc = $scope;

    var monthCode ={
        "1":"January",
        "2":"February",
        "3":"March",
        "4":"April",
        "5":"May",
        "6":"June",
        "7":"July",
        "8":"August",
        "9":"September",
        "10":"October",
        "11":"November",
        "12":"December"
    };

    // Experience

    $scope.editExp = function (idx) {
        $scope.selectedExp = angular.copy($scope.background.experience[idx]);
        $scope.selectedExp.description = $scope.selectedExp.description.replace(/<br \/>/gi, "\n")
        $scope.selectedIdx = idx;
    };

    $scope.addExp = function () {
        $scope.selectedIdx = -1;
        $scope.selectedExp = null;
    }

    $scope.saveExp = function () {
        var exp = new Object();
        exp.company = $scope.selectedExp.company;
        exp.title = $scope.selectedExp.title;
        exp.location = $scope.selectedExp.location;
        exp.description = $scope.selectedExp.description.replace(/\n/gi, "<br />");
        exp.monthStart = $scope.selectedExp.monthStart;
        exp.yearStart = $scope.selectedExp.yearStart;
        exp.monthFinish = $scope.selectedExp.monthFinish;
        exp.yearFinish = $scope.selectedExp.yearFinish;
        exp.logo = $scope.selectedExp.logo;
        exp.currentWork = $scope.selectedExp.currentWork;
        exp.date = monthCode[exp.monthStart] + ", " + exp.yearStart + " - ";
        if (exp.currentWork)
            exp.date += "Present";
        else
            exp.date += monthCode[exp.monthFinish] + ", " + exp.yearFinish;

        if ($scope.selectedIdx != -1)
            $scope.background.experience[$scope.selectedIdx] = exp;
        else
            $scope.background.experience.push(exp);

        $scope.selectedExp = null;
    };

    $scope.removeExp = function () {
        $scope.background.experience.splice($scope.selectedIdx, 1);
        $scope.selectedIdx = -1;
    }

    // Projects

    $scope.editProject = function (idx) {
        $scope.selectedProject = angular.copy($scope.background.projects[idx]);
        $scope.selectedProject.description = $scope.selectedProject.description.replace(/<br \/>/gi, "\n")

        var mem = "";
        for (var i = 0; i < $scope.selectedProject.members.length; i++) {
            if (i > 0)
                mem += ", ";
            mem += $scope.selectedProject.members[i].name;
        }
        $scope.selectedProject.members = mem;
        $scope.selectedIdx = idx;
    };

    $scope.addProject = function () {
        $scope.selectedIdx = -1;
        $scope.selectedProject = null;
    }

    $scope.saveProject = function () {
        var project = new Object();
        project.name = $scope.selectedProject.name;
        project.description = $scope.selectedProject.description.replace(/\n/gi, "<br />");
        project.occupation = $scope.selectedProject.occupation;
        project.month = $scope.selectedProject.month;
        project.year = $scope.selectedProject.year;
        project.date = monthCode[project.month] + " - " + project.year;
        project.members = [];

        var teamMembers = $scope.selectedProject.members.split(",");
        for (var i = 0; i < teamMembers.length; i++)
        {
            var mem = new Object();
            mem.name = teamMembers[i];
            mem.headline = "Member";
            mem.avatar = "images/ghost_person.png";
            project.members.push(mem);
        }


        if ($scope.selectedIdx != -1)
            $scope.background.projects[$scope.selectedIdx] = project;
        else
            $scope.background.projects.push(project);

        $scope.selectedProject = null;
    };

    $scope.removeProject = function () {
        $scope.background.projects.splice($scope.selectedIdx, 1);
        $scope.selectedIdx = -1;
    }

    // Skill

    $scope.editTopSkill = false;
    $scope.editMoreSkill = false;

    $scope.editSkill = function (top) {
        if(top)
            $scope.editTopSkill = !$scope.editTopSkill;
        else
            $scope.editMoreSkill = !$scope.editMoreSkill;
    }

    $scope.removeSkill = function (idx, name, top) {
        $scope.background.skill.sort(function (a, b) {
            return b.endorseCount - a.endorseCount;
        });

        if (!top)
            idx += 10;

        while($scope.background.skill[idx].name != name)
            idx++;

        $scope.background.skill.splice(idx, 1);
    }

    $scope.saveNewSkill = function () {
        var newSkill = new Object();
        newSkill.name = $scope.newSkillName;
        newSkill.endorseCount = 0;

        $scope.background.skill.push(newSkill);
    };


    // Education

    $scope.editEdu = function (idx) {
        $scope.selectedIdx = idx;
        $scope.selectedEdu = angular.copy($scope.background.education[idx]);
    }

    $scope.addEdu = function () {
        $scope.selectedIdx = -1;
        $scope.selectedEdu = null;
    }

    $scope.removeEdu = function () {
        $scope.background.education.splice($scope.selectedIdx, 1);
        $scope.selectedIdx = -1;
    }

    $scope.saveEdu = function () {
        var edu = new Object();
        edu = $scope.selectedEdu;
        edu.date = edu.yearStart + " - " + edu.yearFinish;
        edu.description = edu.description.replace(/\n/gi, "<br />");;

        if ($scope.selectedIdx > -1)
            $scope.background.education[$scope.selectedIdx] = edu;
        else
            $scope.background.education.push(edu);

        $scope.selectedEdu = null;
    };
});