import express from 'express'
import morgan from 'morgan'

const app = express()
app.use(morgan('dev'))

app.get('/', (req, res) => {
  res.json({
    firstName: 'imran',
    lastName: 'hossain',
    title: 'full Stack Devloper'
  })
})

const port = Number(process.env.PORT ?? 8080)
app.listen(port, '0.0.0.0', () => {
  console.log(`Server started at http://localhost:${port}`)
})
