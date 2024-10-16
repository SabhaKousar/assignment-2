function updatePreview() {
    document.getElementById("previewName").textContent = document.getElementById("name").value;
    document.getElementById("previewEmail").textContent = document.getElementById("email").value;
    document.getElementById("previewPhone").textContent = document.getElementById("phone").value;
    document.getElementById("previewSummary").textContent = document.getElementById("summary").value;

    updateSkills();
}

function addEducation() {
    const educationSection = document.getElementById("education-section");
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Enter education detail";
    input.oninput = updateEducation;
    educationSection.appendChild(input);
}

function addExperience() {
    const experienceSection = document.getElementById("experience-section");
    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Enter experience detail";
    input.oninput = updateExperience;
    experienceSection.appendChild(input);
}

function updateEducation() {
    const educationInputs = document.getElementById("education-section").getElementsByTagName("input");
    const previewEducation = document.getElementById("previewEducation");
    previewEducation.innerHTML = "";
    for (let input of educationInputs) {
        const li = document.createElement("li");
        li.textContent = input.value;
        previewEducation.appendChild(li);
    }
}

function updateExperience() {
    const experienceInputs = document.getElementById("experience-section").getElementsByTagName("input");
    const previewExperience = document.getElementById("previewExperience");
    previewExperience.innerHTML = "";
    for (let input of experienceInputs) {
        const li = document.createElement("li");
        li.textContent = input.value;
        previewExperience.appendChild(li);
    }
}

function updateSkills() {
    const skills = ["html", "css", "js"];
    const previewSkills = document.getElementById("previewSkills");
    previewSkills.innerHTML = "";

    skills.forEach(skill => {
        if (document.getElementById(skill).checked) {
            const li = document.createElement("li");
            li.textContent = document.getElementById(skill).value;
            previewSkills.appendChild(li);
        }
    });
}

function resetForm() {
    document.getElementById("previewName").textContent = "";
    document.getElementById("previewEmail").textContent = "";
    document.getElementById("previewPhone").textContent = "";
    document.getElementById("previewSummary").textContent = "";
    document.getElementById("previewEducation").innerHTML = "";
    document.getElementById("previewSkills").innerHTML = "";
    document.getElementById("previewExperience").innerHTML = "";
}
