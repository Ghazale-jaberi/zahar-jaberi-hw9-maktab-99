function calculateTimeUntilNextMeal(currentTime, mealTime) {
    const now = new Date();
    const meal = new Date();
    const [hours, minutes] = mealTime.split(":");
    
    meal.setHours(parseInt(hours, 10));
    meal.setMinutes(parseInt(minutes, 10));
    
    if (meal <= now) {
        meal.setDate(now.getDate() + 1);
    }
    
    const timeDiff = Math.abs(meal - now);
    const hoursUntil = Math.floor(timeDiff / (60 * 60 * 1000));
    const minutesUntil = Math.floor((timeDiff % (60 * 60 * 1000)) / (60 * 1000));
    
    return { hoursUntil, minutesUntil };
}

function nextMeal(inputTime) {
    const currentTime = new Date();
    const mealTimes = [
        { time: "7:00 a.m", name: "breakfast" },
        { time: "12:00 p.m", name: "lunch" },
        { time: "7:00 p.m", name: "dinner" }
    ];

    const mealTime = mealTimes.find(meal => meal.time === inputTime);

    if (mealTime) {
        console.log(`${mealTime.name} time ...`);
    } else {
        const nearestMeal = mealTimes.reduce((prev, curr) => {
            const prevDiff = calculateTimeUntilNextMeal(currentTime, prev.time);
            const currDiff = calculateTimeUntilNextMeal(currentTime, curr.time);
            return (currDiff.hoursUntil < prevDiff.hoursUntil ||
                    (currDiff.hoursUntil === prevDiff.hoursUntil && currDiff.minutesUntil < prevDiff.minutesUntil))
                ? curr
                : prev;
        });

        const timeDiff = calculateTimeUntilNextMeal(currentTime, nearestMeal.time);
        console.log(`${timeDiff.hoursUntil} hours and ${timeDiff.minutesUntil} minutes until next meal,\n${nearestMeal.name}`);
    }
}

// Test cases
nextMeal("5:50 a.m");
nextMeal("2:00 p.m");
nextMeal("12:00 p.m");
