const conferenceData = require("../json/query.json");

function findAnswer(question) {
  const cleanedQuestion = question.toLowerCase();

  if (cleanedQuestion.includes("objective")) {
    return "The objective of the conference is to bring together researchers and practitioners from academia and industry to discuss recent trends and developments in computing and communication technologies.";
  } else if (cleanedQuestion.includes("organizers")) {
    return "The main organizers are the Department of Computer Science and Engineering at Sri Sairam College of Engineering.";
  } else if (
    cleanedQuestion.includes("where") &&
    cleanedQuestion.includes("held")
  ) {
    return "The conference will be held at the Seminar Hall, Sri Sairam College of Engineering, Anekal.";
  } else if (cleanedQuestion.includes("registration process")) {
    return "Participants can register through the official registration link provided on the conference website.";
  } else if (cleanedQuestion.includes("submission guidelines")) {
    return "Submission guidelines are available on the conference website. All papers should follow the specified format and must be submitted before the deadline.";
  } else if (cleanedQuestion.includes("acceptable topics")) {
    return "Papers can be submitted on topics including Communication and Networks, Data Science, Advanced Computing, Circuits and Systems, 5G Networks, and more.";
  } else if (cleanedQuestion.includes("last date for paper submission")) {
    return "The last date for paper submission is October 18th, 2024.";
  } else if (cleanedQuestion.includes("plagiarism check")) {
    return "All submitted papers will be checked for plagiarism using standard plagiarism detection tools.";
  } else if (cleanedQuestion.includes("how to submit paper")) {
    return "Register for the conference through our website, and you will receive a mail from us. Enter the login credentials provided, and then you can submit the paper.";
  } else if (cleanedQuestion.includes("who can submit")) {
    return "Only the team leader should submit the paper.";
  } else if (cleanedQuestion.includes("student coordinators")) {
    const coordinators = conferenceData.organizingCommittee.studentcoordinators;
    return `${coordinators
      .map((coordinator) => {
        const name = Object.keys(coordinator)[0];
        const details = coordinator[name][0];
        return `${name} (Year: ${details.year}, Phone: ${details.phone}, Position: ${details.position})`;
      })
      .join(", ")}`;
  } else if (cleanedQuestion.includes("pitchathon")) {
    return "The Pitchathon is an event where participants can pitch their innovative ideas and prototypes related to technology and engineering.";
  } else if (cleanedQuestion.includes("prototype for pitchathon")) {
    return "It is optional, but participants are encouraged to have a working prototype, as it can add value to their pitch.";
  } else if (cleanedQuestion.includes("is pitchathon related to papers")) {
    return "The Pitchathon is a separate event, but participants may choose to present ideas related to their paper submissions. It's going to happen on the second day, and you should present a PPT based on your product.";
  } else if (cleanedQuestion.includes("acceptance notification")) {
    return "The acceptance notification will be sent out on October 25th, 2024.";
  } else if (cleanedQuestion.includes("registration deadline")) {
    return "The deadline for registration is October 27th, 2024.";
  } else if (
    cleanedQuestion.includes("final date for submitting a soft copy")
  ) {
    return "The final date for submitting a soft copy of the paper is October 27th, 2024.";
  } else if (cleanedQuestion.includes("contact organizers")) {
    return "Participants can contact the conference organizers via email at icrcct@gmail.com or by phone at 83002-71850 / 63828-17065.";
  } else if (cleanedQuestion.includes("soft copy of the paper")) {
    return "The soft copy of the paper should be sent through the website. Click the submit button, enter your login credentials there, and then submit the paper.";
  } else if (cleanedQuestion.includes("conference name")) {
    return "The conference name is the International Conference on Recent Trends in Computing and Communication Technologies (ICRCCT) 2024.";
  } else if (cleanedQuestion.includes("occurrence")) {
    return "It's going to happen for 2 days; the first day will be of paper presentations, and the second day will be of the Pitchathon event.";
  } else if (cleanedQuestion.includes("dates")) {
    return "The conference dates are November 14th & 15th, 2024. The paper submission deadline is October 18th, 2024.";
  } else if (cleanedQuestion.includes("event activities")) {
    return "The event activities include Paper Presentations and a Pitchathon where participants can pitch innovative ideas.";
  } else if (cleanedQuestion.includes("paper topics")) {
    return "Acceptable paper topics include Communication and Networks, Data Science, Circuits and Systems, 5G/Next Generation Networks, and more.";
  } else if (cleanedQuestion.includes("organizing committee")) {
    return "The organizing committee includes Dr. Smitha JA as the General Chair and Dr. Mahesh C as the Conference Chair, along with student coordinators Kamalakannan and Naveen Rajan M.";
  } else if (cleanedQuestion.includes("important links")) {
    return "Important links include the submission guidelines, registration form, and contact info. Please check the conference website for more details.";
  }

  return "please contact 6382817065";
}

module.exports = {
  findAnswer,
};
