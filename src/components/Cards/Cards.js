import React from "react"
import { Card, CardContent, Typography, Grid } from '@material-ui/core'
import CountUp from 'react-countup';
import cx from 'classnames'

import styles from './Cards.module.css';

function Cards({ data: { confirmed, recovered, deaths, lastUpdate }}) {    
  let cardInformations = []
  
  if(!confirmed){
    return 'Loading...'
  }
  else{
    cardInformations = [
    {
      title: 'Infected',
      end: confirmed.value,
      klasa: styles.infected,
      text: 'Number of active cases of COVID-19'
    },
    {
      title: 'Recovered',
      end: recovered.value,
      klasa: styles.recovered,
      text: 'Number of recoveries cases of COVID-19'
    },
    {
      title: 'Deaths',
      end: deaths.value,
      klasa: styles.deaths,
      text: 'Number of deaths caused by COVID-19'
    },
  ]
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justifyContent="center">
        {cardInformations.map(({title, end, klasa, text}, idx) => {
          return (
            <Grid key={idx} item component={Card} xs={12} md={3} className={cx(styles.card, klasa)}>
              <CardContent>
                <Typography color="textSecondary" gutterBottom>{title}</Typography>
                <Typography varaint="h5">
                  <CountUp start={0} end={end} duration={2.5} separator="," />
                </Typography>
                <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                <Typography variant="body2">{text}</Typography>
              </CardContent>
            </Grid>
          )
        })}
      </Grid>
    </div>
  )
}

export default Cards
