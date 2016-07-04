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
      "degree": "Bachelors of Arts",
      "majors": "Interdisciplinary Studies",
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
        "description": "Long string describing job skills and tasks. Long string describing job skills and tasks. Long string describing job skills and tasks. Long string describing job skills and tasks. Long string describing job skills and tasks. Long string describing job skills and tasks. Long string describing job skills and tasks. Long string describing job skills and tasks."
    },
    {
        "employer": "Raleys",
        "title": "Night Crew Clerk",
        "dates": "May 2012 - October 2015",
        "location": "South Lake Tahoe, CA",
        "description": "Long string describing job skills and tasks. Long string describing job skills and tasks. Long string describing job skills and tasks. Long string describing job skills and tasks. Long string describing job skills and tasks. Long string describing job skills and tasks. Long string describing job skills and tasks. Long string describing job skills and tasks."
    }
  ]
};

// Project TODO: add descriptions and a sample image or two of each //
var projects = {
  "projects": [
    {
      "title": "Interactive Resume",
      "dates": "July 2016",
      "description": "Long string describing project and tasks. Long string describing project and tasks. Long string describing project and tasks. Long string describing project and tasks. Long string describing project and tasks. Long string describing project and tasks. Long string describing project and tasks. Long string describing project and tasks.",
      "images": [
        "http://www.example.com/img.jpg",
        "http://www.example.com/img2.jpg"]
    },
    {
      "title": "Classic Arcade Game Clone",
      "dates": "July 2016",
      "description": "Long string describing project and tasks. Long string describing project and tasks. Long string describing project and tasks. Long string describing project and tasks. Long string describing project and tasks. Long string describing project and tasks. Long string describing project and tasks. Long string describing project and tasks.",
      "images": [
        "http://www.example.com/img.jpg",
        "http://www.example.com/img2.jpg"]
    },
    {
      "title": " Website Optimization",
      "dates": "July 2016",
      "description": "Long string describing project and tasks. Long string describing project and tasks. Long string describing project and tasks. Long string describing project and tasks. Long string describing project and tasks. Long string describing project and tasks. Long string describing project and tasks. Long string describing project and tasks.",
      "images": [
        "http://www.example.com/img.jpg",
        "http://www.example.com/img2.jpg"]
    },
    {
      "title": "Neighborhood Map",
      "dates": "July 2016",
      "description": "Long string describing project and tasks. Long string describing project and tasks. Long string describing project and tasks. Long string describing project and tasks. Long string describing project and tasks. Long string describing project and tasks. Long string describing project and tasks. Long string describing project and tasks.",
      "images": [
        "http://www.example.com/img.jpg",
        "http://www.example.com/img2.jpg"]
  }
]
};

bio.display = function() {
	$("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
	$("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
	$("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
	$("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
	$("#topContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
	$("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
	$("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
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
	$("#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
	$("#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
	$("#footerContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
	$("#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
	$("#footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
};

work.display = function () {
  for (job in work.jobs)  {
    $("#workExperience").append(HTMLworkStart);

    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    $(".work-entry:last").append(formattedEmployer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    $(".work-entry:last").append(formattedTitle);
    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);
    var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    $(".work-entry:last").append(formattedLocation);
  }
};

projects.display = function() {
  for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);

    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);

    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description)
    $(".project-entry:last").append(formattedDescription);

    if (projects.projects[project].images.length > 0) {
      for (image in projects.projects[project].images) {
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
      $(".project-entry:last").append(formattedImage);
      }
    }
  }
};

education.display = function() {
 education.schools.forEach(function(school){
    $("#education").append(HTMLschoolStart);
        var formattedURL = HTMLschoolName.replace("#", school.url);
        var formattedSchool = HTMLschoolName.replace("%data%", school.school);
        var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
        var formattedDate = HTMLschoolDates.replace("%data%", school.dates);
        var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
        var formattedMajor = HTMLschoolMajor.replace("%data%", school.majors);
    $(".education-entry:last").append(formattedSchool, formattedDate + formattedDegree, formattedLocation, formattedMajor);
    });
    $("#education").append(HTMLonlineClasses);
  education.onlineCourses.forEach(function(online){
    $("#education").append(HTMLschoolStart);
        var formattedTitle = HTMLonlineTitle.replace("%data%", online.title);
        var formattedURL = HTMLonlineURL.replace("%data%", online.url);
        var formattedCourse = HTMLonlineSchool.replace("%data%", online.school);
        var formattedonlineDate = HTMLonlineDates.replace("%data%", online.dates);
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
