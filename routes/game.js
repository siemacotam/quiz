function gameRoutes(app) {
    let goodAnswers = 0;
    let isGameOver = false;
    let callToAFriend = false;
    let questionToTheCrowd = false;
    let halfOnHalf = false;

    const questions = [
        {
            question: ' co tam ?',
            answers: ['spoko','cool','jakos leci','niezle'],
            correctAnswer: 0,
        },
        {
            question: ' jak leci ?',
            answers: ['bien','wysoko','ok','good'],
            correctAnswer: 1,
        },
        {
            question: ' palisz ?',
            answers: ['tak','nie','co ? ','pewka'],
            correctAnswer: 3,
        },
    ];

    app.get('/question', (req, res) => {

        if(goodAnswers === questions.length) {
            res.json({
                winner: true,
            });
        } else if(isGameOver){
            res.json({
                loser: true
            });
        } else {
            const nextQuestion = questions[goodAnswers];

            const {question, answers} = nextQuestion;

            res.json({
                question, answers,
            })
        }

    });

    app.post('/answer/:index', (req , res) => {

        if(isGameOver) {
            res.json({
                loser: true
            });
        }

        const { index } = req.params;
        
        const question = questions[goodAnswers];

        const isGoodAnswer = question.correctAnswer === Number(index);

            if (isGoodAnswer){
                goodAnswers++;
            } else {
                isGameOver: true;
            }


            res.json({
                correct: isGoodAnswer,
                goodAnswers,
            });

    })
}

module.exports = gameRoutes;