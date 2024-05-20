import logo from './logo.svg';
import './App.css';
import BmiInput from './BmiInput';
import BmiGraph from './BmiGraph';
import { useState, useEffect } from 'react';

function App() {

  // ローカルストレージからデータを取得
  const jsonInitialBmiList = localStorage.getItem('bmiList');
  let initialBmiList = JSON.parse(jsonInitialBmiList);

  // データがない場合、配列を初期化
  if(initialBmiList === null) {
    initialBmiList = [];
  }

  const [bmiList, setBmiList] = useState(initialBmiList);

  // BMIデータの追加処理 
  const addBmiList = (newBmiData) => {
    // BMIデータを更新
    setBmiList(prev => ([...prev, newBmiData]));
  };

  const bmiDelete = (id) => {
    // 特定のBMIデータを削除 
    const deleteBmiList = bmiList.filter(function(x){return x.id != id});
    // BMIデータを更新
    setBmiList(deleteBmiList);
  };

  const allDelete = () => {
    setBmiList([]);
  };

  // ローカルストレージへの保存処理
  useEffect(
    () => {
      // BMIデータをJSON形式へ変換
      const jsonBmiList = JSON.stringify(bmiList);
      // ローカルストレージへ保存
      localStorage.setItem('bmiList', jsonBmiList);
    },
    [ bmiList ]
  );
  

  return (
    <div className="App">
      <div className='inner'>
        <p className='bmi_title'>BMI Tracker</p>
        <div className='top_wrapper'>
          <div className='input_wrapper wrapper'>
            <BmiInput addBmiList={addBmiList} />
          </div>
          <div className='bmi_graph_wrapper wrapper'>
          <BmiGraph bmiList={bmiList} />
          </div>
        </div>
        <div className='bmi_list_wrapper wrapper'>
          <div className='bmi_list_inner'>
            {bmiList.map((bmiData) => (
            <div className='bmi_list'>
              <p className="">{bmiData.bmi}</p>
              <p className="">{bmiData.weight}</p>
              <p className="">{bmiData.height}</p>
              <p className="">{bmiData.strDate}</p>
              <div className='close_btn_wrapper'>
                <button onClick={() => bmiDelete(bmiData.id)} className="close_btn">
                  <img src='./close.svg'/>
                </button>
              </div>
            </div>
            ))}
            <div className='bmi_list bmi_list_h'>
              <p className="">bmi</p>
              <p className="">weight</p>
              <p className="">height</p>
              <p className="">date</p>
            </div>
          </div>
          <div className='all_delete_btn'>
            <button onClick={() => allDelete ()}>undo</button>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default App;
