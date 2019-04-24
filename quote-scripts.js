$(document).ready(function () {




    function rotateQuotes() {
        
        var quote1 = '<div class="container-fluid bottom-space start-center quote-bg start-row-bg-blue-O"> <div class="grid-row"> <div class="col-sm-12"> <div class="start-pull"> <div class="quote-marks"> The <span class="medium">best</span> <span class="large">preparation</span> for <span class="medium">tomorrow</span><br><i>is doing your <span class="medium">best</span> today.</i><br><span class="quote-author">- H. Jackson Brown, Jr</span> </div></div></div></div></div>';

        var quote2 = '<div class="container-fluid bottom-space start-center quote-bg start-row-bg-blue-O"> <div class="grid-row"> <div class="col-sm-12"> <div class="start-pull"> <div class="quote-marks"><i><span class="medium">Reach for it.</span></i><br>Push<span class="large"> yourself</span> as <span class="medium">far</span> as you <span class="large">can</span>.<br><span class="quote-author">- Christa McAuliffe</span> </div></div></div></div></div>';

        var quote3 = '<div class="container-fluid bottom-space start-center quote-bg start-row-bg-blue-O"> <div class="grid-row"> <div class="col-sm-12"> <div class="start-pull"> <div class="quote-marks">My <span class="medium">mission </span>in life is <span class="large">not</span> merely to survive, but to<span class="large"> thrive</span>; and to do so with some <i>passion</i>, some <i>compassion</i>, some <i>humor</i>, and some <i>style</i>.<br><span class="quote-author">- Maya Angelou</span> </div></div></div></div></div>';

        var quote4 = '<div class="container-fluid bottom-space start-center quote-bg start-row-bg-blue-O"> <div class="grid-row"> <div class="col-sm-12"> <div class="start-pull"> <div class="quote-marks"> An <span class="medium">investment</span> in <span class="large">knowledge</span> <br><i>pays the best interest</i>. <br><span class="quote-author">- Benjamin Franklin</span> </div></div></div></div></div>';

        var quote5 = '<div class="container-fluid bottom-space start-center quote-bg start-row-bg-blue-O"> <div class="grid-row"> <div class="col-sm-12"> <div class="start-pull"> <div class="quote-marks"><span class="large">Productivity</span> is not just about<span class="medium"> doing more</span>. It’s about creating <span class="medium">more</span><span class="large"> impact</span> with <span class="medium">less work</span>.<br><span class="quote-author">– Prerna Malik</span> </div></div></div></div></div>';

        var quote6 = '<div class="container-fluid bottom-space start-center quote-bg start-row-bg-blue-O"> <div class="grid-row"> <div class="col-sm-12"> <div class="start-pull"> <div class="quote-marks"> <i>It’s not about how bad <span class="medium">you want</span> it</i>.<br>It’s about <span class="large">how hard </span> you’re <span class="medium">willing to</span><span class="large"> work</span> for it. </div></div></div></div></div>';

        var quote7 = '<div class="container-fluid bottom-space start-center quote-bg start-row-bg-blue-O"> <div class="grid-row"> <div class="col-sm-12"> <div class="start-pull"> <div class="quote-marks"><span class="large">You</span> can waste your <span class="medium">lives</span> drawing lines. <br><i>Or you can <span class="large">live your life</span> crossing them</i>.<br><span class="quote-author">– Shonda Rhimes</span> </div></div></div></div></div>';

        var quote8 = '<div class="container-fluid bottom-space start-center quote-bg start-row-bg-blue-O"> <div class="grid-row"> <div class="col-sm-12"> <div class="start-pull"> <div class="quote-marks">I will keep <span class="medium">smiling</span>, be <span class="large">positive</span> and <span class="medium">never</span> give up!<br><i>I will give <span class="medium">100 percent</span> each time I play</i>. <br><span class="quote-author">– Yani Tseng</span> </div></div></div></div></div>';

        var quote9 = '<div class="container-fluid bottom-space start-center quote-bg start-row-bg-blue-O"> <div class="grid-row"> <div class="col-sm-12"> <div class="start-pull"> <div class="quote-marks">In the end,<br>its about being <span class="large">proud of yourself</span><br>for <span class="medium">being where you are</span> now. </div></div></div></div></div>';

        var quoteSection;
        var quotesList = [quote1, quote2, quote3, quote4, quote5, quote6, quote7, quote8, quote9];


        for (i = 0; i < quotesList.length; i++) {
            quoteSection = quotesList[i];
            $('#quoteSection').html(quotesList[i]);
        }
    }

    rotateQuotes();





});