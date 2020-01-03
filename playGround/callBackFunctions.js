setTimeout(()=>{
    console.log("I have come back ")
},2000);

const geocode = (address, callback) => {
  setTimeout(()=>{
      const data = {
          latitude:0,
          longitude:0
      };
      callback(data)
  },2000)
};

geocode('Phili',f);


