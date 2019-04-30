const game1Data = [
    {
      "title": "Subject 1: Basic Dialog",
          "card": [
            {
              "id": "1a",
              "sentence": "hello",
              "canGo": ["2a"]
            },
            {
              "id": "1b",
              "sentence": "Good Morning",
              "canGo": ["2b"]
            },
            {
              "id": "2a",
              "sentence": "My Name is...",
              "canGo": ["2b", "3a", "3b"]
            },
            {
              "id": "2b",
              "sentence": "What's your name?",
              "canGo": ["2a", "3a", "3b"]
            },
            {
              "id": "3a",
              "sentence": "Nice to meet you",
              "canGo": ["3b", "4c" ]
            },
            {
              "id": "3b",
              "sentence": "How are you?",
              "canGo": ["3a", "4a"]
            },
            {
              "id": "4a",
              "sentence": "I'm not so good.",
              "canGo": ["5b"]
            },
            {
              "id": "5a",
              "sentence": "Have a good day!",
              "canGo": ["5b"]
            },
            {
              "id": "4b",
              "sentence": "Fine",
              "canGo": ["4c", "5a", "5b", "5c"]
            },
            {
              "id": "4c",
              "sentence": "See you.",
              "canGo": ["5b"]
            }
          ]
    }
  ];
