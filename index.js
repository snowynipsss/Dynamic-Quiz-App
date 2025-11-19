$(document).ready(function () {
    let currentQuestion = 1;
    const totalQuestions = 10;

    const correctAnswers = {
        q1: 'b',
        q2: 'c',
        q3: 'a',
        q4: 'b',
        q5: 'b',
        q6: 'b',
        q7: 'b',
        q8: 'd',
        q9: 'false',
        q10: 'true'
    };

    showQuestion(currentQuestion);

    $('#next').click(function () {
        if (currentQuestion < totalQuestions) {
            currentQuestion++;
            showQuestion(currentQuestion);
        }
    });

    $('#prev').click(function () {
        if (currentQuestion > 1) {
            currentQuestion--;
            showQuestion(currentQuestion);
        }
    });

    $('#submit').click(function () {
        let score = 0;

        for (let i = 1; i <= totalQuestions; i++) {
            const selected = $('input[name="q' + i + '"]:checked').val();
            if (selected === correctAnswers['q' + i]) {
                score++;
            }
        }

        $('#result').text('Your score: ' + score + '/' + totalQuestions);
        $('#quiz').hide();
        $('.buttons').hide();
    });

    function showQuestion(num) {
        $('.question').removeClass('active');
        $('.question[data-q="' + num + '"]').addClass('active');

        $('#prev').prop('disabled', num === 1);
        $('#next').prop('disabled', num === totalQuestions);

        const progress = (num / totalQuestions) * 100;
        $('#progress-bar').css('width', progress + '%');
    }
});
