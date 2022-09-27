let t1= document.getElementById("testH1");
t1.style.backgroundColor = "red";
let tr = true;
let sr = true;


let p1 = new Promise ((resolve,reject)=>{ 
  t1.style.backgroundColor = 'limegreen';
  tr
  ? resolve('This is the value i need')
  : reject('Rejected')
}).then(
    resolve => new Promise ((resolve,reject)=> {
      if(sr) {
	t1.textContent = `0 ${sr}`; 
        setTimeout(()=>{
	  t1.textContent = `1200 ready to go violet`;
	  t1.style.backgroundColor = 'violet';
	}, 1200);
        resolve ('yellow');
      }
      else {
        reject(console.log('rejected sr'));
      }
    }), 
    a2 => {t1.textContent = a2})
  .then((arg1)=>{
      setTimeout(()=>{
        t1.style.backgroundColor = arg1;
        t1.textContent = `3000 Last color ${arg1}`;
      },3000);
      return 'orange';
    }
    , reject=>{console.log('last reject')}
  ).then((sirLast)=>{
      setTimeout(()=>{
        t1.style.backgroundColor = sirLast;
        t1.textContent = `5000 Seriously last color -> ${sirLast}`
      },5000);

  }
  )	
