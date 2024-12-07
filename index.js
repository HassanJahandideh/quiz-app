const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris"
  },
  {
    question: "Which programming language is known as the backbone of web development?",
    options: ["Python", "JavaScript", "Java", "C++"],
    answer: "JavaScript"
  },
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    answer: "4"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: "Mars"
  }
];

// گرفتن المان‌های DOM
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");
const scoreEl = document.getElementById("score");

// متغیرهای مربوط به کوییز
let currentQuestionIndex = 0;
let score = 0;

// نمایش سوال
function showQuestion() {
  const currentQuestion = questions[currentQuestionIndex];

  // نمایش سوال
  questionEl.textContent = currentQuestion.question;

  // پاک کردن گزینه‌های قبلی
  optionsEl.innerHTML = "";

  // نمایش گزینه‌ها
  currentQuestion.options.forEach(option => {
    const button = document.createElement("button");
    button.textContent = option;
    button.classList.add("option-btn");
    button.addEventListener("click", () => selectAnswer(option));
    optionsEl.appendChild(button);
  });
}

// انتخاب پاسخ
function selectAnswer(selectedOption) {
  const currentQuestion = questions[currentQuestionIndex];

  // بررسی پاسخ درست
  if (selectedOption === currentQuestion.answer) {
    score++;
  }

  // غیر فعال کردن گزینه‌ها
  const buttons = document.querySelectorAll(".option-btn");
  buttons.forEach(button => {
    button.disabled = true;
    if (button.textContent === currentQuestion.answer) {
      button.style.backgroundColor = "green"; // پاسخ درست
    } else if (button.textContent === selectedOption) {
      button.style.backgroundColor = "red"; // پاسخ اشتباه
    }
  });
}

// رفتن به سوال بعدی
nextBtn.addEventListener("click", () => {
  currentQuestionIndex++;

  // اگر سوالات تمام شدند، نتیجه را نمایش بده
  if (currentQuestionIndex >= questions.length) {
    showResult();
    return;
  }

  showQuestion();
});

// نمایش نتیجه
function showResult() {
  document.getElementById("quiz").style.display = "none";
  nextBtn.style.display = "none";
  resultEl.style.display = "block";
  scoreEl.textContent = `${score} / ${questions.length}`;
}

// شروع کوییز
showQuestion();
m