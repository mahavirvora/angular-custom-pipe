import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular';
  products = {
    "contents": [
        {
            "id": "111",
            "sequence": 1,
            "topic": "d7cd23b8-991c-470f-ac63-d8fb106f3927b",
            "status": "IN_PROGRESS",
            "contentType": "PDF",
            "contentAccessStatus": "Last visited 3 days ago",
            "name": "Backward Design",
            "duration": "5-10 minute",
            "author": "McGarranty",
            "source": "Leanring",
            "description": "this is description",
            "rating": 5,
            "userRatingCount": 10,
            "keywordTags": [
                "1",
                "2"
            ],
            "commentsCount": 15,
            "learningObjectiveCount": 3,
            "learningObjective": [
                "1",
                "2",
                "3"
            ]
        },
        {
            "id": "112",
            "sequence": 1,
            "topic": "d7cd23b8-991c-470f-ac63-d8fb106f3927b",
            "status": "IN_PROGRESS",
            "contentType": "VIDEO",
            "contentAccessStatus": "Last visited 3 days ago",
            "name": "Backward Design",
            "duration": "5-10 minute",
            "author": "McGarranty",
            "source": "Leanring",
            "description": "this is description",
            "rating": 5,
            "userRatingCount": 10,
            "keywordTags": [
                "2"
            ],
            "commentsCount": 15,
            "learningObjectiveCount": 3,
            "learningObjective": [
                "3"
            ]
        },
        {
            "id": "113",
            "sequence": 1,
            "topic": "d7cd23b8-991c-470f-ac63-d8fb106f3927b",
            "status": "IN_PROGRESS",
            "contentType": "AUDIO",
            "contentAccessStatus": "Last visited 3 days ago",
            "name": "Backward Design",
            "duration": "5-10 minute",
            "author": "McGarranty",
            "source": "Leanring",
            "description": "this is description",
            "rating": 5,
            "userRatingCount": 10,
            "keywordTags": [
                "3"
            ],
            "commentsCount": 15,
            "learningObjectiveCount": 3,
            "learningObjective": [
                "2",
            ]
        },
        {
            "id": "114",
            "sequence": 1,
            "topic": "d7cd23b8-991c-470f-ac63-d8fb106f3927b",
            "status": "IN_PROGRESS",
            "contentType": "IMAGE",
            "contentAccessStatus": "Last visited 3 days ago",
            "name": "Backward Design",
            "duration": "5-10 minute",
            "author": "McGarranty",
            "source": "Leanring",
            "description": "this is description",
            "rating": 5,
            "userRatingCount": 10,
            "keywordTags": [
                "1",
                "3"
            ],
            "commentsCount": 15,
            "learningObjectiveCount": 3,
            "learningObjective": [
                "2",
                "3",
            ]
        },
        {
            "id": "115",
            "sequence": 2,
            "topic": "d7cd23b8-991c-470f-ac63-d8fb106f3927b",
            "status": "NOT_STARTED",
            "contentType": "POLL",
            "contentAccessStatus": "close in 3 days",
            "name": "What do you fear most when design couse",
            "description": "this is description",
            "pollDetails": {
                "id": "d7cd23b8-991c-470f-ac63-d8fb106f391e",
                "question": "What is life?",
                "description": "Knowledge of life",
                "totalVotes": 50,
                "isOpen": true,
                "isAnswered": false,
                "isMultipleAnswerAllow": true,
                "totalResponse": 3,
                "totalResponsePercentage": 75,
                "answers": [
                    {
                        "id": "d7cd23b8-991c-470f-ac63-d8fb106f34h7",
                        "answer": "Fear of making mistake",
                        "votePercentage": 52.5,
                        "selected": false
                    },
                    {
                        "id": "d7cd23b8-991c-470f-ac63-d8fb106f3j2",
                        "answer": "Fear of being Stupid",
                        "votePercentage": 50,
                        "selected": false
                    }
                ]
            }
        },
        {
            "id": "116",
            "sequence": 3,
            "topic": "d7cd23b8-991c-470f-ac63-d8fb106f3916",
            "status": "COMPLETED",
            "contentType": "POLL",
            "contentAccessStatus": "closed on August 1st 3.00 PM EST",
            "name": "What do you fear most when design couse",
            "description": "this is description",
            "pollDetails": {
                "id": "d7cd23b8-991c-470f-ac63-d8fb106f3915",
                "question": "What you fear for?",
                "description": "question desc",
                "totalVotes": 100,
                "isOpen": false,
                "isAnswered": true,
                "isMultipleAnswerAllow": true,
                "totalResponse": 10,
                "totalResponsePercentage": 60.5,
                "answers": [
                    {
                        "id": "d7cd23b8-991c-470f-ac63-d8fb106f34h7",
                        "answer": "Fear of making mistake",
                        "votePercentage": 52,
                        "selected": true
                    },
                    {
                        "id": "d7cd23b8-991c-470f-ac63-d8fb106f3j2",
                        "answer": "Fear of being Stupid",
                        "votePercentage": 50,
                        "selected": true
                    }
                ]
            }
        }
    ],
    "filter": {
        "topics": [
            {
                "id": "d7cd23b8-991c-470f-ac63-d8fb106f3927b",
                "name": "Rubrics"
            },
            {
                "id": "d7cd23b8-991c-470f-ac63-d8fb106f3916",
                "name": "Design Activity"
            }
        ],
        "keywords": [
            {
                "id": "1",
                "name": "Introduction"
            },
            {
                "id": "2",
                "name": "Communication"
            },
            {
                "id": "3",
                "name": "Basic"
            }
        ],
        "contentTypes": [
            "AUDIO",
            "IMAGE",
            "PDF",
            "POLL",
            "VIDEO",
            "WEB_VIEW"
        ],
        "learningObjectives": [
            {
                "id": "1",
                "name": "First learningObjective"
            },
            {
                "id": "2",
                "name": "Second learningObjective"
            },
            {
                "id": "3",
                "name": "Third learningObjective"
            }
        ]
    }
};

  ngOnInit() {
  }
}
