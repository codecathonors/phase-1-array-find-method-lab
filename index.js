//const superBowlWin = record.find(element => element === "W");

superbowlWin = (records) => {
    const result = records.find(record => record.result === "W")
        return result.year
        
        console.log(result);
    }

