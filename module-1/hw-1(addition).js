//Addition task
const sharm = 15;
const hurgada = 25;
const taba = 6;

let isConfirmed;
let seatsCount = +prompt('Enter the number of required seats');
let validInput = (Number.parseInt(seatsCount) == seatsCount) && (seatsCount > 0);
switch (validInput) {
    case false:
        alert('Input Error');
        break;
    case seatsCount <= taba:
        isConfirmed = confirm(`We have seats in group - taba! Would you like to join?`);
        if (isConfirmed)
            break;
    case seatsCount <= sharm:
        isConfirmed = confirm(`We have seats in group - sharm! Would you like to join?`);
        if (isConfirmed)
            break;
    case seatsCount <= hurgada:
        isConfirmed = confirm(`We have seats in group - hurgada! Would you like to join?`);
        if (isConfirmed)
            break;
    default:
        alert('Sorry, there are not so many places in any group!');
}