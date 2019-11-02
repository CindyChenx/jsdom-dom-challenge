    let counterBox = document.querySelector("#counter");
    // console.log(counterBox);
    let counter = parseInt(counterBox.innerText);
    // console.log(counter);
    const minusBtn = document.querySelector("#minus");
    const plusBtn = document.querySelector("#plus");
    const heartBtn = document.querySelector("#heart");
    const pauseBtn = document.querySelector("#pause");
    const likeBox = document.querySelector(".likes");
    const commentBox = document.querySelector("#list");
    const commentForm = document.querySelector("#comment-form");
    const commentInput = document.querySelector("#comment-input");
    let pause = false;

    // update timer every sec
    let startTimer = setInterval(incrementTimer, 1000);
    function incrementTimer(){
        if(!pause){
            counter++;
            counterBox.innerText = counter;
        }
    }

    // click minus button
    minusBtn.addEventListener("click", function(e){
        counter--;
        counterBox.innerText = counter;
    });

    // click add button
    plusBtn.addEventListener("click", function(e){
        counter++;
        counterBox.innerText = counter;
    });

    // click heart
    var likes={};
    heartBtn.addEventListener("click", function(e){
        const likeList = document.createElement("li");
        if(likes[counter]){
            likes[counter] += 1;
            likeBox.children[likeBox.children.length-1].innerText = `Number ${counter} has been liked ${likes[counter]} times.`;
        } else {
            likes[counter] = 1;
            likeList.innerText = `Number ${counter} has been liked 1 time`;
            likeBox.appendChild(likeList);
        }
    });

    // click pause
    pauseBtn.addEventListener("click", function(e){
        pause = !pause;
        if (pause){
            minusBtn.disabled = true;
            plusBtn.disabled = true;
            heartBtn.disabled = true;
            pauseBtn.innerText = "resume";
        } else {
            minusBtn.disabled = false;
            plusBtn.disabled = false;
            heartBtn.disabled = false;
            pauseBtn.innerText = "pause";
        }
    });

    // leave comment
    commentForm.addEventListener("submit", function(e){
        e.preventDefault();
        const commentList = document.createElement("li");
        commentList.innerText = commentInput.value;
        commentBox.appendChild(commentList);
        commentForm.reset();
        appendDeleteBtn(commentList);
    });

    // add delete btn for each comment
    function appendDeleteBtn(commentList){
        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";
        commentList.appendChild(deleteBtn);
    
        deleteBtn.addEventListener("click", function(e){
            e.target.parentElement.remove();
        });
    }