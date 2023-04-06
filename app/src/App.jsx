import Card from "./components/Card"
import data from './data.json'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from "./components/styles/Global"
import { GridStyled } from "./components/styles/Grid.styled"
import Profile from "./components/Profile"
import { useState } from 'react'


const theme = {
  colors: {

    //Primary

    blue: 'hsl(246, 80%, 60%)',

    Work: 'hsl(35, 77%, 62%)',
    Play: ' hsl(195, 74%, 62%)',
    Exercise: 'hsl(145, 58%, 55%)',
    Study: 'hsl(348, 100%, 68%)',
    Social: 'hsl(264, 64%, 52%)',
    'Self Care': 'hsl(43, 84%, 65%)',


    //Neutral

    veryDarkBlue: 'hsl(226, 43%, 10%)',
    darkBlue: 'hsl(235, 46%, 20%)',
    desaturatedBlue: 'hsl(235, 45%, 61%)',
    paleBlue: 'hsl(236, 100%, 87%)',
    cardHover: 'hsl(235 38% 34%)',

  },

  mobile: '768px'
}


function App() {
  const [activeView, setActiveView] = useState('daily')



  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <GridStyled>
        <Profile active={activeView} handleClick={setActiveView} />


        {data.map((item, index) => (

          <Card item={item} key={index}>
            <div className="card-data">
              <div className="title">
                <p>{item.title}</p>
                <a><i class="fa-solid fa-ellipsis"></i></a>
              </div>
              <div className="last-week">
                <h1>{item.timeframes[activeView].current}hrs</h1>
                <p>Last Week - {item.timeframes[activeView].previous}hrs</p>
              </div>
            </div>
          </Card>

        ))}
      </GridStyled>

    </ThemeProvider>
  )
}

export default App