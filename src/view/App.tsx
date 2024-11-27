import { useEffect, useState } from 'react'
import './App.css'
import { WaterQualityData } from './interface/WaterQualityData'

type WaterQualityResp = {
  httpCode: number,
  httpMessage: string,
  count: number,
  item: Array<WaterQualityData>
}

function App() {

  const [waterQualityState, setWaterQuality] = useState<WaterQualityResp>()

  useEffect(() => {
    fetch("https://api.water.gov.taipei/prod/WaterQualityData", {
      method: "Post"
    }).then(res => {
      res.json().then((res: WaterQualityResp) => {
        setWaterQuality(res)
      })
    })
  }, [])

  const waterQualities = waterQualityState ? waterQualityState.item.map((waterQualityData: WaterQualityData) => {
    return (
      <div className='waterQuality'>
        <h1>{waterQualityData.code_name}</h1>
        <p>濁度: {waterQualityData.qua_cntu}</p>
        <p>餘氯: {waterQualityData.qua_cl}</p>
        <p>ph值: {waterQualityData.qua_ph}</p>
      </div>
    )
  }) : "loading"

  return (
    <>
      <div className="container">
        {waterQualities}
      </div>
    </>
  )
}

export default App
