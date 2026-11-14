

const loadData = () =>{

    const url = "https://openapi.programming-hero.com/api/levels/all";

    fetch(url)
    .then((res)=> res.json())
    .then(json => displaylesson (json.data))
}


const displaylesson = (lessons) =>{

    const lessonContainer = document.getElementById("lesson_contianer");
    
    // show the empty card : 
    if(lessonContainer == 0){
        
        lessonContainer.innerHTML = `
        
        <div class="card empty-state">
            <div class="card-body empty-body">

                <!-- Warning Icon -->
                <i class="fa-solid fa-triangle-exclamation empty-icon"></i>

                <!-- ছোট লেখা -->
                <p class="empty-text bangla">
                    এই Lesson এ এখনো কোনো Vocabulary যুক্ত করা হয়নি
                </p>

                <!-- বড় লেখা -->
                <h3 class="empty-title bangla">
                    নেক্সট Lesson এ যান
                </h3>

            </div>
        </div>
        
        `;
    }


    
 lessons.forEach(lesson => {
 
   const NewElement = document.createElement("div");



   
   NewElement.innerHTML = `
   <button onclick="loadWord(${lesson.level_no})"class="btn btn-outline btn-sm">

                        <img src="./assets/fa-book-open.png" alt="">

                        Lesson -${lesson.level_no} - ${lesson.lessonName}

                    </button>
   
    
   
   `
  lessonContainer.appendChild(NewElement);

    
 });


}


// Display Word meaning Card : 


 const loadWord = (id) =>{

     const url = `https://openapi.programming-hero.com/api/level/${id}`
      
     fetch(url)
     .then((res)=>res.json())   
     .then(data => displayWord(data.data) )

 }

 const displayWord = (words) =>{

      const WordMeaningContainer = document.getElementById("word_container");
      WordMeaningContainer.innerHTML = "";

 words.forEach(word =>{

   const createWordCard = document.createElement("div");
   createWordCard.innerHTML = "";
   createWordCard.className = "word-card"
   createWordCard.innerHTML = `
   
   
   
 <!-- English Word -->
            <h2 class="word-title">
                ${word.word}
            </h2>

            <!-- Meaning / Pronunciation -->
            <p class="word-subtitle">
                ${word.pronunciation} | Pronunciation
            </p>

            <!-- Bengali Meaning -->
            <h3 class="word-meaning">
                "${word.meaning || "Meaning not available"}"
            </h3>

            <!-- Action Buttons -->
            <div class="word-actions">

                <button onclick="loadWordDetails(${word.id})" class="btn btn-ghost word-icon"
                        type="button">
                    <i class="fa-solid fa-circle-info"></i>
                </button>

                <button onclick="pronounceWord('${word.word}')" class="btn btn-ghost word-icon"
                        type="button">
                    <i class="fa-solid fa-volume-high"></i>
                </button>

            </div>
   
   `
   WordMeaningContainer.appendChild(createWordCard);
    
  

 })

 }

// this is the card display the word card details after click the icon
 
const loadWordDetails = async (id) => {

    const url = `https://openapi.programming-hero.com/api/word/${id}`;

    const res = await fetch(url);
    const response = await res.json();

    displayInnercard(response.data);

};


const displayInnercard = (card) => {

    const innerCardcontainer =
        document.getElementById("word_details_modal");

    innerCardcontainer.innerHTML = `

        <div class="modal-box word-modal-box">

            <div class="word-details-card">

                <!-- Word Title -->
                <h2 class="detail-title">
                    ${card.word} (${card.pronunciation})
                </h2>

                <!-- Meaning -->
                <div class="detail-section">
                    <h3>Meaning</h3>
                    <p>${card.meaning || "Meaning not available"}</p>
                </div>

                <!-- Example -->
                <div class="detail-section">
                    <h3>Example</h3>
                    <p>
                        ${card.sentence || "Example not available"}
                    </p>
                </div>

                <!-- Synonyms -->
                <div class="detail-section">
                    <h3>সমার্থক শব্দ গুলো</h3>

                    <div class="synonym-list">

                        ${(card.synonyms || []).map(synonym => `
                            <span class="badge">
                                ${synonym}
                            </span>
                        `).join("")}

                    </div>
                </div>

            </div>

            <!-- Complete Learning -->
            <div class="modal-action">

                <button
                    class="btn complete-btn"
                    onclick="document.getElementById('word_details_modal').close()"
                    type="button">

                    Complete Learning

                </button>

            </div>

        </div>

        <form method="dialog" class="modal-backdrop">
            <button>close</button>
        </form>

    `;

    innerCardcontainer.showModal();

};

// word pronounciation part 
function pronounceWord(word) {
  const utterance = new SpeechSynthesisUtterance(word);
  utterance.lang = "en-EN"; // English
  window.speechSynthesis.speak(utterance);
}

loadData()