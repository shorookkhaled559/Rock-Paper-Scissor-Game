// ======== Initial Scores ========
let [computer_score, user_score] = [0, 0];

// ======== Page Elements ========
let result_ref = document.getElementById("result");
let userIcon = document.getElementById("user_icon");
let compIcon = document.getElementById("comp_icon");

// ======== Font Awesome Icons ========
const icons = {
    rock: '<i class="far fa-hand-rock"></i>',
    paper: '<i class="far fa-hand-paper"></i>',
    scissor: '<i class="far fa-hand-scissors"></i>'
};

// ======== Game Logic: win, lose, draw ========
const choices_object = {
    rock: { rock: "draw", scissor: "win", paper: "lose" },
    scissor: { rock: "lose", scissor: "draw", paper: "win" },
    paper: { rock: "win", scissor: "lose", paper: "draw" }
};

// ======== Main Function ========
function checker(input) {
    // Random choice for computer
    const choices = ["rock", "paper", "scissor"];
    const num = Math.floor(Math.random() * 3);
    const computer_choice = choices[num];

    // Display selected choices
    document.getElementById("user_choice").innerHTML =
        `You chose <span>${input.toUpperCase()}</span>`;
    document.getElementById("comp_choice").innerHTML =
        `Computer chose <span>${computer_choice.toUpperCase()}</span>`;

    // Display icons and remove hidden class
    userIcon.innerHTML = icons[input];
    compIcon.innerHTML = icons[computer_choice];
    userIcon.classList.remove("hidden");
    compIcon.classList.remove("hidden");

    // Determine result
    const outcome = choices_object[input][computer_choice];

    switch (outcome) {
        case "win":
            // User wins
            result_ref.className = "w-44 py-2 mx-auto font-semibold tracking-wide bg-green-100 text-green-700 rounded-md";
            result_ref.innerHTML = "YOU WIN";
            user_score++;
            break;

        case "lose":
            // User loses
            result_ref.className = "w-44 py-2 mx-auto font-semibold tracking-wide bg-red-100 text-red-700 rounded-md";
            result_ref.innerHTML = "YOU LOSE";
            computer_score++;
            break;

        default:
            // Draw
            result_ref.className = "w-44 py-2 mx-auto font-semibold tracking-wide bg-gray-200 text-gray-600 rounded-md";
            result_ref.innerHTML = "DRAW";
            break;
    }

    // Update scores on the page
    document.getElementById("computer_score").innerHTML = computer_score;
    document.getElementById("user_score").innerHTML = user_score;
}
