const p = new Promise((resolve, reject) => {
    const sucess = false;

    setTimeout(() => {
        console.log('Running!');

        if (sucess)
            return resolve("Finished");
        else
            return reject("Rejected")
    }, 1000);
    
});

const response = p
    .then((r) => {
        console.log(r);
    })
    .catch((err) => {
        console.log(err);
    });

