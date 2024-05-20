// 子コンポーネント
import { useState } from 'react';

const BmiInput = (props)=>{   

  // state変数を設定
  const [weight , setWeight] = useState("");
  const [height , setHeight] = useState("");
  
  // 体重入力時処理
  const inputWeight = e => {
    // 体重を更新
    setWeight(e.target.value);
  };

   // 身長入力時処理
  const inputHeight = e => {
    // 身長を更新
    setHeight(e.target.value);
  };

  // BMIの計算
  const calculateBmi = () => {
    // IDを生成
    const date = new Date();
    const id = date.getTime();

    // BMI取得
    let bmi = weight / ((height / 100) * (height / 100));
    bmi = Math.floor(bmi * 100) / 100;

    // 日付取得
    let strDate = date.getFullYear()
    + '/' + ('0' + (date.getMonth() + 1)).slice(-2)
    + '/' + ('0' + date.getDate()).slice(-2)
    + ' ' + ('0' + date.getHours()).slice(-2)
    + ':' + ('0' + date.getMinutes()).slice(-2)
    + ':' + ('0' + date.getSeconds()).slice(-2);

    // BMIデータの追加用にオブジェクトを生成
    const addBmiData = { id: id, bmi: bmi, weight: weight, height: height, strDate: strDate };
    
    // BMIリストへ追加
    props.addBmiList(addBmiData);

    // テキストボックスを初期化
    setWeight("");
    setHeight("");
  };


  return(
      <div>
        <input type="text" value={weight} onChange={inputWeight} className="" placeholder="weight" />
        <input type="text" value={height} onChange={inputHeight} className="" placeholder="height" />
        <button onClick={() => calculateBmi()} >Calculate BMI</button>
      </div>
  )
}
export default BmiInput