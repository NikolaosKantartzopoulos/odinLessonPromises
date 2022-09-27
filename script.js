let t1= document.getElementById("testH1");
t1.style.backgroundColor = "red";
let tr = true;


let p1 = new Promise ((resolve,reject)=>{ 
  t1.style.backgroundColor = 'limegreen';
  tr
  ? resolve('123')
  : reject('Rejected')
}).then(
    resolve => {
      t1.textContent = resolve; 
      setTimeout(()=>{
	console.log('ready to go violet');
	t1.style.backgroundColor = 'violet'
	}, 1200);
      return 'yellow';
    }, 
    a2 => {t1.textContent = a2})
  .then((arg1)=>{
      setTimeout(()=>{
        t1.style.backgroundColor = arg1;
        console.log(`Last color ${arg1}`)
      },3000);
    }
    , reject=>{console.log('last reject')}
)	
