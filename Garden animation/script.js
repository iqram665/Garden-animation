document.addEventListener("DOMContentLoaded", () => {
    const flowerPlants = document.querySelectorAll('.flower-plant');
    const fruitPlants = document.querySelectorAll('.fruit-plant');
    const billboardContent = document.querySelector('.billboard-content');
    const nextBtn = document.getElementById('next-step-btn');

    let currentStep = 0;

    // 1. First step: 1 second after the page loads, all the flowers and trees in the garden will bloom together.
    setTimeout(() => {
        flowerPlants.forEach((plant, index) => {
            setTimeout(() => {
                plant.classList.add('bloom');
            }, index * 200); 
        });
        currentStep = 1;
    }, 1000);

    // 2. Button press logic (blooming fruits and turning on the billboard)
    nextBtn.addEventListener('click', () => {
        if (currentStep === 1) {
            // Second step: All fruit trees will pop up together with mangoes and dragon fruits
            fruitPlants.forEach((plant, index) => {
                setTimeout(() => {
                    plant.classList.add('bloom');
                }, index * 250);
            });

            nextBtn.innerText = "Light Up the Billboard!";
            currentStep = 2;
        } else if (currentStep === 2) {
            // Final step: The YouTube neon billboard on the building's roof will light up
            billboardContent.classList.add('turn-on');
            nextBtn.style.display = 'none'; // The button will go away as the work is done.The button will go away as the work is done.
        }
    });
});