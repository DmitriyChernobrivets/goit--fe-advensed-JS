// Home work
const adminLogin = 'admin';
const adminPassword = 'm4ngo1zh4ackz0r';

const adminPrompt = prompt('Enter Administrator Login');
let adminPromptPw;

const cancel = 'Canceled by the user!';
const accessDenied = 'Access Denied!';
const welcome = 'WELCOME!';

if (!adminPrompt) {
      alert(cancel)
} else if (adminPrompt == adminLogin) {
      adminPromptPw = prompt('Enter Administrator Password');
      if (!adminPromptPw) {
            alert(cancel)
      } else if (adminPromptPw == adminPassword) {
            alert(welcome)
      } else {
            alert(accessDenied);
      }
} else alert(accessDenied);