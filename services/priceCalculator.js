const priceCalculator = (baseDistance, fixPrice, kmPrice, totalDistance) => {
    console.log("\n")
    console.log("Base Distance : ", baseDistance);
    console.log("Fixed Price : ", fixPrice);
    console.log("Price for Kilometer : ", kmPrice);
    console.log("Total Distance : ", totalDistance);

    const basePriceInCents = fixPrice * 100;
    const extraDistance = totalDistance - baseDistance;
    console.log("Extra Distance : ", extraDistance);

    const extraPriceInCents = extraDistance > 0 ? extraDistance * kmPrice *100: 0;
    console.log("Extra Price : ", extraPriceInCents/100);

    const totalPrice = (basePriceInCents + extraPriceInCents)/100;
    console.log("\nTotal Price : ", totalPrice);

    return totalPrice;
}


module.exports = priceCalculator;

// const priceCalculator = (baseDistance, kmPrice, fixPrice, totalDistance) => {
//     const basePriceInCents = fixPrice * 100; // Convert fixPrice to cents
//     const extraDistance = totalDistance - baseDistance;
//     const extraPriceInCents = extraDistance > 0 ? extraDistance * kmPrice * 100 : 0; // Convert kmPrice to cents
//     const totalPriceInCents = basePriceInCents + extraPriceInCents;

//     return totalPriceInCents / 100; // Convert back to dollars for display
// }

// module.exports = priceCalculator;
