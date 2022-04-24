const profileDataArgs = process.argv.slice(2, process.argv.length);

const printProfileData = (profleDaraArr) => {
   for (let i=0; i<profileDaraArr.length; i++) {
       console.log(profileDataArr[i]);
   }

    console.log('================');

    profileDataArr.forEach((profileItem) => console.log(profileItem));
};