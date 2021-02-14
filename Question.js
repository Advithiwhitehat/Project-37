class Question {
    constructor() {
      this.input = createInput("Name");
      this.answer = createInput('option')
      this.o1 = createElement('option1')
      this.o2 = createElement('option2')
      this.o3 = createElement('option3')
      this.o4 = createElement('option4')
      this.button = createButton('Submit')
      this.q = createElement('h2');
    }
    hide(){
      this.button.hide();
      this.input.hide();
      this.answer.hide();
      }
    display(){
      var title = createElement('h2')
      title.html("My Quiz Game");
      title.position(130, 0);

      var q = createElement('question')
      var answer = createInput("Answer")
      var o1 = createElement('o1')
      var o2 = createElement('o2')
      var o3 = createElement('o3')
      var o4 = createElement('o4')
      var input = createInput("Name");
      var button = createButton('Submit');
      
      this.answer.position(200,260);

      this.q.html("What starts and ends with the letter 'E' but only has one letter")
      
      this.o1.html("1) Envelope")
      this.o1.position(100,20);
      
      this.o2.html("2) Example")
      this.o2.position(100,40);
      
      this.o3.html("3) Everyone")
      this.o3.position(100,60);
      
      this.o4.html("4) Estimate")
      this.o4.position(100,80);

      this.input.position(130, 160);
      this.button.position(250, 200);
  
      this.button.mousePressed(function(){
        this.input.hide();
        this.button.hide();
  
        var name = input.value();
        
        contestantCount+=1;
        contestant.update(name)
        contestant.updateCount(contestantCount);
      });
    }
  }