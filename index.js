const express = require('express') //express 모듈을 가져온다.
const app = express() //function을 이용해서 새로운 exrpess 앱을 만든다.
const port = 5000 //백서버

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test', {
    useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))

app.get('/', (req, res) => res.send('Hello World! ~ 안녕하세요~')) //루트 디렉토리에 오면 'hello world' 를 출력해라

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`)) //포트 5000번에서 'app'을 실행해라