// Bio TODO: add image of myself and more skills //
var bio = {
    "name": "Geoff Haber",
    "role": "Web Developer",
    "contacts": {
      "mobile": "530-721-2895",
      "email": "ghaber@bellsouth.net",
      "github": "skygtr350",
      "twitter": "@skygtr350",
      "location": "South Lake Tahoe, CA",
      "oldLocation": "Miami, FL"
    },
    "welcomeMessage": "Welcome to my Interactive Resume",
    "skills": ["HTML", "CSS", "Javascript", "etc"],
    "biopic": "images/fry.jpg"
};

// Education TODO: maybe add some fluff info about major //
var education = {
  "schools": [
    {
      "school": "University of Central Florida",
      "location": "Orlando, Florida",
      "degree": "Bachelor of Arts",
      "majors": ['Interdisciplinary Studies'],
      "dates": "2005 - 2009",
      "url": "http://www.ucf.edu"
    }],
    "onlineCourses": [
      {
        "title": "Front-End Web Developer Nanodegree",
        "school": "Udacity",
        "dates": "2016",
        "url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
      }
    ]
};

// Jobs TODO: add descriptions and resposibilities of each //
var work = {
  "jobs": [
    {
        "employer": "Dollar Tree",
        "title": "Assistant Store Manager",
        "dates": "October - December 2015",
        "location": "Zephyr Cover, NV",
        "description": "Long string describing job skills and tasks. Long string describing" +
        "job skills and tasks. Long string describing job skills and tasks. Long string describing" +
        "job skills and tasks. Long string describing job skills and tasks. Long string describing" +
        "job skills and tasks. Long string describing job skills and tasks."
    },
    {
        "employer": "Raleys",
        "title": "Night Crew Clerk",
        "dates": "May 2012 - October 2015",
        "location": "South Lake Tahoe, CA",
        "description": "Long string describing job skills and tasks. Long string describing " +
        "job skills and tasks. Long string describing job skills and tasks. Long string describing " +
        "job skills and tasks. Long string describing job skills and tasks. Long string describing " +
        "job skills and tasks. Long string describing job skills and tasks."
    }
  ]
};

// Project TODO: add descriptions and a sample image or two of each //
var projects = {
  "projects": [
    {
      "title": "Interactive Resume",
      "dates": "July 2016",
      "description": "Long string describing project and tasks. Long string describing project and tasks. " +
      "Long string describing project and tasks. Long string describing project and tasks. Long string " +
      "describing project and tasks. Long string describing project and tasks. Long string describing " +
      "project and tasks. Long string describing project and tasks.",
      "images": ["http://placekitten.com/200/300"]
    },
    {
      "title": "Classic Arcade Game Clone",
      "dates": "July 2016",
      "description": "Long string describing project and tasks. Long string describing project and tasks. " +
      "Long string describing project and tasks. Long string describing project and tasks. Long string" +
      "describing project and tasks. Long string describing project and tasks. Long string describing" +
      "project and tasks. Long string describing project and tasks.",
      "images": ["http://placekitten.com/200/300"]
    },
    {
      "title": " Website Optimization",
      "dates": "July 2016",
      "description": "Long string describing project and tasks. Long string describing project and tasks." +
      "Long string describing project and tasks. Long string describing project and tasks. Long string " +
      "describing project and tasks. Long string describing project and tasks. Long string describing" +
      "project and tasks. Long string describing project and tasks.",
      "images": ["http://placekitten.com/200/300"]
    },
    {
      "title": "Neighborhood Map",
      "dates": "July 2016",
      "description": "Long string describing project and tasks. Long string describing project and tasks. " +
      "Long string describing project and tasks. Long string describing project and tasks. Long string " +
      "describing project and tasks. Long string describing project and tasks. Long string describing " +
      "project and tasks. Long string describing project and tasks.",
      "images": ["http://placekitten.com/200/300"]
  }
]};

bio.display = function() {
	$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
	$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
	$("#topContacts, #footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
	$("#topContacts, #footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
	$("#topContacts, #footerContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
	$("#topContacts, #footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
	$("#topContacts, #footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
  $("#header").append(HTMLbioPic.replace("%data%", bio.biopic));
  $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);

		for (i = 0; i < bio.skills.length; i++)
		{
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
			$("#skills").append(formattedSkill);
		}
	}
};

work.display = function () {
  work.jobs.forEach(function(job){
    $("#workExperience").append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%",job.employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
    var formattedDates = HTMLworkDates.replace("%data%", job.dates);
    var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
    var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
    $(".work-entry:last").append(formattedEmployer + formattedTitle, formattedDates, formattedLocation, formattedDescription);
  });
};

projects.display = function() {
  projects.projects.forEach(function(project){
    $("#projects").append(HTMLprojectStart);
      var formattedpTitle = HTMLprojectTitle.replace("%data%", project.title);
      var formattedpDates = HTMLprojectDates.replace("%data%", project.dates);
      var formattedpDescription = HTMLprojectDescription.replace("%data%", project.description);
      $(".project-entry:last").append(formattedpTitle, formattedpDates, formattedpDescription);
  project.images.forEach(function(pImg){
      var formattedImage = HTMLprojectImage.replace("%data%", pImg);
      $(".project-entry:last").append(formattedImage);
    });
  });
};

education.display = function() {
 education.schools.forEach(function(school){
    $("#education").append(HTMLschoolStart);
        var formattedSchool = HTMLschoolName.replace("%data%", school.school).replace("#", school.url);
        var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
        var formattedDate = HTMLschoolDates.replace("%data%", school.dates);
        var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
        var formattedMajor = HTMLschoolMajor.replace("%data%", school.majors);
    $(".education-entry:last").append(formattedSchool + formattedDegree, formattedLocation, formattedDate, formattedMajor);
  });
    $("#education").append(HTMLonlineClasses);
  education.onlineCourses.forEach(function(onlineC){
    $("#education").append(HTMLschoolStart);
        var formattedTitle = HTMLonlineTitle.replace("%data%", onlineC.title).replace("#", onlineC.url);
        var formattedURL = HTMLonlineURL.replace("%data%", onlineC.url).replace("#", onlineC.url);
        var formattedCourse = HTMLonlineSchool.replace("%data%", onlineC.school);
        var formattedonlineDate = HTMLonlineDates.replace("%data%", onlineC.dates);
    $(".education-entry:last").append(formattedTitle + formattedCourse, formattedonlineDate, formattedURL);
  });
};

// internationalize Button
function inName(name) {
  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
  return name[0] + " " + name[1];
}

// Display everything
$('#main').append(internationalizeButton);
bio.display();
work.display();
projects.display();
education.display();
$("#mapDiv").append(googleMap);
