//Timer

function startTimer() {
    // Get the input and timer elements from the DOM
    const durationInput = document.getElementById('duration');
    const timerElement = document.getElementById('timer');

    // Parse the user-entered duration as an integer
    const duration = parseInt(durationInput.value);

    // Check if the entered duration is valid
    if (isNaN(duration) || duration <= 0) {
        // Display an alert if the duration is not valid
        alert('Please enter a valid duration greater than 0 seconds.');
        return;
    }

    // Initialize the time remaining with the entered duration
    let timeRemaining = duration;

    // Set up an interval to update the timer every second
    const timerInterval = setInterval(() => {
        // Update the timer element with the remaining time
        timerElement.textContent = timeRemaining;
        // Decrement the time remaining
        timeRemaining--;

        // Check if the countdown has reached zero
        if (timeRemaining < 0) {
            // Stop the interval and display a message when time is up
            clearInterval(timerInterval);
            timerElement.textContent = 'Time\'s up!';
        }
    }, 1000);

    //Add animation
    timerElement.classList.add('animated');
}


// To-do list 


    let taskList = [];
  
// Function to add a new task
function addTask() {
  var taskInput = document.getElementById("taskInput");
  var taskListElement = document.getElementById("taskList");

  // Create a new list item
  var listItem = document.createElement("li");
  listItem.className = "list-group-item";
  listItem.id = "task" + (taskList.length + 1);

  // Create a span for the task text
  var taskText = document.createElement("span");
  taskText.className = "task-text";
  taskText.appendChild(document.createTextNode(taskInput.value));

  // Create a 'Done' button
  var doneButton = document.createElement("button");
  doneButton.className = "done-button";
  doneButton.appendChild(document.createTextNode("Done"));
  doneButton.onclick = function () {
    markDone(listItem.id);
  };

  // Create a 'Delete' button
  var deleteButton = document.createElement("button");
  deleteButton.className = "delete-button";
  deleteButton.appendChild(document.createTextNode("Delete"));
  deleteButton.onclick = function () {
    deleteTask(listItem.id);
  };

  // Append elements to the list item
  listItem.appendChild(taskText);
  listItem.appendChild(doneButton);
  listItem.appendChild(deleteButton);

  // Add the new task to the task list
  taskList.push({ id: listItem.id, text: taskInput.value, completed: false });
  taskListElement.appendChild(listItem);

  // Clear the input field
  taskInput.value = "";
}

// Function to mark a task as done
function markDone(taskId) {
  var task = document.getElementById(taskId);
  if (task) {
    // Toggle the 'done' class to visually mark the task as done
    task.classList.toggle("done");
    var taskIndex = taskList.findIndex((t) => t.id === taskId);
    if (taskIndex !== -1) {
      // Update the completed status in the task list
      taskList[taskIndex].completed = !taskList[taskIndex].completed;
      // Show a success alert
      showAlert('Task marked as done!');
    }
  }
}

// Function to display a success alert
function showAlert(message) {
  var alertElement = document.createElement("div");
  alertElement.className = "alert alert-success mx-auto";
  alertElement.role = "alert";
  alertElement.appendChild(document.createTextNode(message));

  var todoElement = document.querySelector(".todo");
  todoElement.appendChild(alertElement);

  // Remove the alert after 3 seconds
  setTimeout(function () {
    alertElement.remove();
  }, 3000);
}

// Function to delete a task
function deleteTask(taskId) {
  var task = document.getElementById(taskId);
  if (task) {
    // Remove the task from the DOM
    task.remove();
    // Filter the task out of the task list
    taskList = taskList.filter((t) => t.id !== taskId);
  }
}

// Function to display tasks in the task list
function displayTasks() {
  const taskListElement = document.getElementById('taskList');
  taskListElement.innerHTML = ' ';

  taskList.forEach(task => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <span>${task.text}</span>
      <button class="action-button" onclick="markDone('${task.id}')">Complete</button>
      <button class="action-button" onclick="deleteTask('${task.id}')">Delete</button>
    `;

    if (task.completed) {
      listItem.classList.add('completed');
    }

    taskListElement.appendChild(listItem);
  });
}

// Display tasks when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  displayTasks();
});

  
//Interactive elements

// Function to show a specific tab based on its ID
function showTab(tabId) {
    // Hide all tabs
    const tabs = document.getElementsByClassName('tab-content');
    for (const tab of tabs) {
        tab.style.display = 'none';
    }

    // Show the selected tab
    const selectedTab = document.getElementById(tabId);

    // Check if the selected tab exists
    if (selectedTab) {
        // Display the selected tab
        selectedTab.style.display = 'block';
    }
}


//Meet our founder accordion

// Function to toggle the visibility of an accordion item based on its collapse ID
function toggleAccordion(collapseId) {
    // Get the collapse element by ID
    const collapseElement = document.getElementById(collapseId);

    // Check if the collapse element has the 'show' class
    if (collapseElement.classList.contains('show')) {
        // If 'show' class is present, remove it to hide the accordion item
        collapseElement.classList.remove('show');
    } else {
        // If 'show' class is not present, add it to display the accordion item
        collapseElement.classList.add('show');
    }
}


// Products

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Get the product list container
  const productList = document.getElementById('productList');

  // Array of products with their details
  const products = [
    {
      id: 1,
      name: "Dr. Ceuracle cleansing oil",
      image: "images/dr.ceuracle.png",
      price: 6590,
    },
    {
      id: 2,
      name: "Clean it ZERO sherbet",
      image: "images/zero.png",
      price: 7890,
    },
    {
      id: 3,
      name: "Beauty of Joseon peeling",
      image: "images/beaujo.png",
      price: 9990,
    },
    {
      id: 4,
      name: "Dr. Jart+ night mask",
      image: "images/drjart.png",
      price: 6890,
    },
  ];

  // Loop through each product and create HTML elements
  products.forEach(product => {
    // Create a div for each product
    const productDiv = document.createElement('div');
    productDiv.className = 'col-md-6 text-center product';

    // Set inner HTML for the product div
    productDiv.innerHTML = `
      <img src="${product.image}" class="img-fluid" alt="${product.name}">
      <h4 class="product-title">${product.name}</h4>
      <p class="product-price">${product.price} tg</p>
      <button class="btn btn-primary btn-block add-to-cart" data-product-id="${product.id}">
        <i class="fas fa-shopping-cart"></i> Add to Cart
      </button>
    `;

    // Append the product div to the product list container
    productList.appendChild(productDiv);


    // Add mouseover event listener to show tooltip
    productDiv.addEventListener('mouseover', showTooltip);

    // Add mouseout event listener to hide tooltip
    productDiv.addEventListener('mouseout', hideTooltip);

    // Append the product div to the product list container
    productList.appendChild(productDiv);
  });

  // Function to show the tooltip
function showTooltip(event) {
  const button = event.currentTarget.querySelector('.add-to-cart');
  button.setAttribute('title', 'Add to Cart');  // Set the title attribute
}

// Function to hide the tooltip
function hideTooltip(event) {
  const button = event.currentTarget.querySelector('.add-to-cart');
  button.removeAttribute('title');  // Remove the title attribute
}


});


//  selectors, methods, and events

document.addEventListener('DOMContentLoaded', function () {
  // Select all elements with the class 'add-to-cart'
  var addToCartButtons = document.querySelectorAll('.add-to-cart');

  // Add a click event listener to each 'Add to Cart' button
  addToCartButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      // Get the product ID from the 'data-product-id' attribute
      var productId = button.getAttribute('data-product-id');

      // Call a function to handle adding the product to the cart
      addToCart(productId);
    });
  });

  // Function to handle adding the product to the cart
  function addToCart(productId) {
    // Your logic to add the product to the cart goes here
    console.log('Product added to cart! Product ID:', productId);
  }
});

// Animation

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Get all product elements
  const products = document.querySelectorAll('.product');

  // Loop through each product and apply animation
  products.forEach(product => {
    fadeIn(product);
  });

  // Function to animate fading in
  function fadeIn(element) {
    let opacity = 0;
    const fadeInInterval = setInterval(function() {
      if (opacity < 1) {
        opacity += 0.05;
        element.style.opacity = opacity;
      } else {
        clearInterval(fadeInInterval);
      }
    }, 30);
  }
});

// Audio

document.addEventListener('DOMContentLoaded', function() {
  const playSoundButton = document.getElementById('playSoundButton');
  const sound = document.getElementById('sound');

  playSoundButton.addEventListener('click', function() {
    sound.play();
    successAlert.style.display = 'block';
    setTimeout(function() {
      successAlert.style.display = 'none';
    }, 3000);
  });
});




// Game

document.addEventListener('DOMContentLoaded', function () {
  const correctMatches = {
    cream: "hydro",
    aha: "1st",
    oil: "acne"
  };

  const options = document.querySelectorAll('.item');
  const dropzones = document.querySelectorAll('.dropzone');
  const resultContainer = document.getElementById('result-container');
  const result = document.getElementById('result');

  options.forEach(option => {
    option.addEventListener('dragstart', drag);
  });

  dropzones.forEach(dropzone => {
    dropzone.addEventListener('dragover', allowDrop);
    dropzone.addEventListener('drop', drop);
  });

  function allowDrop(event) {
    event.preventDefault();
  }

  function drag(event) {
    event.dataTransfer.setData("text/plain", event.target.id);
  }

  function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text/plain");
    const draggedElement = document.getElementById(data);

    const itemId = data;
    const dropzoneId = event.target.id;

    if (correctMatches[itemId] === dropzoneId) {
      result.textContent = "Correct!";
      animateCorrect(draggedElement, event.target);
    } else {
      result.textContent = "Incorrect!";
    }
  }

  function animateCorrect(draggedElement, dropzone) {
    draggedElement.animate(
      [
        { transform: 'scale(1)' },
        { transform: 'scale(1.2)' },
        { transform: 'scale(1)' }
      ],
      {
        duration: 1000,
        easing: 'ease-out'
      }
    );

    dropzone.animate(
      [
        { backgroundColor: 'rgb(166, 136, 96)' },
        { backgroundColor: 'green' },
        { backgroundColor: 'rgb(166, 136, 96)' }
      ],
      {
        duration: 1000,
        easing: 'ease-out'
      }
    );
  }
});


// Pie chart

  document.addEventListener('DOMContentLoaded', function() {
    var data = {
      labels: ['Korea', 'USA', 'Domestic brands'],
      datasets: [{
        data: [60, 20, 20],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      }],
    };

    // Get the canvas element
    var ctx = document.getElementById('myPieChart').getContext('2d');

    // Create the pie chart
    var myPieChart = new Chart(ctx, {
      type: 'pie',
      data: data,
    });
  });


// Scroll button //

// Function to scroll to the top of the page
function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}

// Show/hide the scroll-to-top button based on scroll position
window.onscroll = function () {
  const scrollBtn = document.getElementById("scrollTopBtn");

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      scrollBtn.style.display = "block";
  } else {
      scrollBtn.style.display = "none";
  }
};

// Video //

// Function to toggle full-screen mode
function toggleFullscreen() {
  const videoContainer = document.getElementById("videoContainer");
  const video = document.getElementById("fullscreenVideo");

  if (!document.fullscreenElement && !document.mozFullScreenElement &&
      !document.webkitFullscreenElement && !document.msFullscreenElement) {
      // Enter full-screen mode
      if (videoContainer.requestFullscreen) {
          videoContainer.requestFullscreen();
      } else if (videoContainer.mozRequestFullScreen) {
          videoContainer.mozRequestFullScreen();
      } else if (videoContainer.webkitRequestFullscreen) {
          videoContainer.webkitRequestFullscreen();
      } else if (videoContainer.msRequestFullscreen) {
          videoContainer.msRequestFullscreen();
      }
  } else {
      // Exit full-screen mode
      if (document.exitFullscreen) {
          document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
      }
  }
}

// Form steps //

let currentStep = 1;

  function nextStep(currentStepId, nextStepId) {
    if (validateStep(currentStepId)) {
      document.getElementById(currentStepId).classList.remove('active');
      currentStep++;
      document.getElementById(nextStepId).classList.add('active');
    }
  }

  function prevStep(currentStepId, prevStepId) {
    document.getElementById(currentStepId).classList.remove('active');
    currentStep--;
    document.getElementById(prevStepId).classList.add('active');
  }

  function validateStep(stepId) {
    const inputs = document.querySelectorAll(`#${stepId} input[type="text"], #${stepId} input[type="email"], #${stepId} textarea`);
    const errors = document.querySelectorAll(`#${stepId} .error-message`);

    errors.forEach(error => error.textContent = '');

    let isValid = true;

    inputs.forEach(input => {
      const inputId = input.id;
      const errorId = `${inputId}Error`;

      if (input.value.trim() === '') {
        document.getElementById(errorId).textContent = `${inputId.charAt(0).toUpperCase() + inputId.slice(1)} is required`;
        isValid = false;
      }
    });

    return isValid;
  }

  function submitForm() {
    if (validateStep('step3')) {
      document.getElementById('consultation-form').style.display = 'none';
      document.getElementById('successMessage').style.display = 'block';
    }
  }

  // Modal box 

  function showWelcomeModal() {
    document.getElementById('welcomeModal').style.display = 'flex';
  }
  
  function closeWelcomeModal() {
    document.getElementById('welcomeModal').style.display = 'none';
  }
  
  window.onload = function() {
    showWelcomeModal();
  }

  // quiz
  
  const questions = [
    {
      question: "What is the main purpose of a cleanser?",
      options: ["Moisturize the skin", "Exfoliate the skin", "Cleanse the skin", "Treat acne"],
      correctAnswer: "Cleanse the skin"
    },
    {
      question: "Which vitamin is essential for collagen production?",
      options: ["Vitamin A", "Vitamin C", "Vitamin E", "Vitamin K"],
      correctAnswer: "Vitamin C"
    },
    {
      question: "What is the key ingredient in a moisturizer?",
      options: ["Hyaluronic Acid", "Salicylic Acid", "Retinol", "Aloe Vera"],
      correctAnswer: "Hyaluronic Acid"
    },
    {
      question: "Which skincare product helps to remove dead skin cells?",
      options: ["Toner", "Serum", "Exfoliator", "Sunscreen"],
      correctAnswer: "Exfoliator"
    },
    {
      question: "What does SPF stand for in sunscreen?",
      options: ["Sun Protection Factor", "Skin Pore Formula", "Sunshine Prevention Factor", "Skin Perfect Finish"],
      correctAnswer: "Sun Protection Factor"
    },
    {
      question: "Which ingredient is known for its anti-aging properties?",
      options: ["Tea Tree Oil", "Collagen", "Jojoba Oil", "Retinol"],
      correctAnswer: "Retinol"
    },
    {
      question: "What is the recommended order of applying skincare products?",
      options: ["Moisturizer, Toner, Serum", "Cleanser, Toner, Moisturizer", "Serum, Moisturizer, Sunscreen", "Cleanser, Serum, Sunscreen"],
      correctAnswer: "Cleanser, Toner, Moisturizer"
    },
    {
      question: "What does BB cream stand for?",
      options: ["Beauty Balm", "Blemish Balm", "Brightening Balm", "Base Balm"],
      correctAnswer: "Beauty Balm"
    },
    {
      question: "Which skincare product is used to remove eye makeup?",
      options: ["Cleanser", "Micellar Water", "Sunscreen", "Toner"],
      correctAnswer: "Micellar Water"
    },
    {
      question: "What is the function of a toner in a skincare routine?",
      options: ["Remove Makeup", "Provide Hydration", "Exfoliate the Skin", "Reduce Dark Circles"],
      correctAnswer: "Provide Hydration"
    }
    
  ];

  let currentQuestion = 0;

  function startQuiz() {
    document.getElementById('start-container').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    loadQuestion();
  }

  function loadQuestion() {
    if (currentQuestion < questions.length) {
      const quizContainer = document.getElementById('quiz-container');
      const questionDiv = document.createElement('div');
      questionDiv.className = 'question';
      questionDiv.innerHTML = `
        <h2>Question ${currentQuestion + 1}</h2>
        <p>${questions[currentQuestion].question}</p>
        <div class="options">
          ${questions[currentQuestion].options.map(option => `<button class="option" onclick="checkAnswer('${option}')">${option}</button>`).join('')}
        </div>
      `;
      quizContainer.innerHTML = '';
      quizContainer.appendChild(questionDiv);
    } else {
      showResult();
    }
  }

  function checkAnswer(selectedAnswer) {
    const correctAnswer = questions[currentQuestion].correctAnswer;
    if (selectedAnswer === correctAnswer) {
      alert('Correct!');
    } else {
      alert(`Incorrect! The correct answer is: ${correctAnswer}`);
    }
    currentQuestion++;
    loadQuestion();
  }

  function showResult() {
    alert('Quiz completed! You can show the user\'s score or other information here.');
    resetQuiz();
  }

  function resetQuiz() {
    currentQuestion = 0;
    document.getElementById('start-container').style.display = 'block';
    document.getElementById('quiz-container').style.display = 'none';
<<<<<<< HEAD
  }
=======
  }
>>>>>>> ec203dfaed42bf7033afda0c80667be090a87e3d
