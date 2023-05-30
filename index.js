import _ from 'lodash';

export default function solution(content){
  // BEGIN

  
  const data = content.split('\n').slice(1).map((el) => el.split(','));
  // console.log(`Всего пассажиров ${data.length}`)  

  const embarked = data.flatMap((el) => el.at(-1).split('\r'));
  const uniq = [...new Set(embarked.filter((el) => el !== ''))]
  // console.log(`Все именования портов посадки: ${uniq.join(', ')}`)

  const femaleCounter = data.filter((el) => el.includes('female')).length
  const maleCounter = data.filter((el) => el.includes('male')).length
  // console.log(`Соотношение пассажиров мужчин и женщин: ${maleCounter}:${femaleCounter}`);

  const all = data.map((el) => el[1]);
  const survived = all.filter((el) => el === '1').length;
  const procent = (survived / all.length) * 100;
  // console.log(`Процент выживших пассажиров: ${Math.round(procent)}%`)

  const names = data.map((el) => el[3].replace(/"/g, ''))
  const aNames = names.filter((el) => el.startsWith('A'))
  // console.log(`Имена всех пассажиров, начинающиеся на букву А: ${aNames.join(', ')}`);
  END
}
