function checkEligibility() {
  const firstName = document.getElementById("firstname").value;
  const birthYear = Number(document.getElementById("birth-year").value);
  const year = Number(2023);
  const age = Number(year - birthYear);
  const license = document.getElementById("license").value === "true";
  const sight = document.getElementById("sight").value === "true";
  const button = document.getElementById("submit");

  if (age >= 18 && license && sight) {
    console.log(
      `${firstName}, you are eligible for this car rental service! 👍`
    );
    alert(`${firstName}, you are eligible for this car rental service! 👍`);
  } else if (age >= 18 && license && !sight) {
    console.log(
      `${firstName}, make sure you don't drive in bad weather conditions.`
    );
    alert(`${firstName}, make sure you don't drive in bad weather conditions.`);
  } else if (age >= 18 && !license && sight) {
    console.log(
      `${firstName}, go get your driver's license, then come back to re-apply.`
    );
    alert(
      `${firstName}, go get your driver's license, then come back to re-apply.`
    );
  } else if (age >= 18 && !license && !sight) {
    console.log(
      `${firstName}, you are not eligible for this car rental service! Make sure to get your license and sight corrected.`
    );
    alert(
      `${firstName}, you are not eligible for this car rental service! Make sure to get your license and sight corrected.`
    );
  } else if (age < 18 && !license && !sight) {
    console.log(
      `${firstName}, you are not eligible for this car rental service! Someone else should drive.`
    );
    alert(
      `${firstName}, you are not eligible for this car rental service! Someone else should drive.`
    );
  } else if (age < 18 && !license && sight) {
    console.log(
      `${firstName}, you are not eligible for this car rental service! Someone else should drive.`
    );
    alert(
      `${firstName}, you are not eligible for this car rental service! Someone else should drive.`
    );
  } else if (age < 18 && license && !sight) {
    console.log(
      `${firstName}, you are still underage in this country! Someone else should drive.`
    );
    alert(
      `${firstName}, you are still underage in this country! Someone else should drive.`
    );
  } else if (age < 18 && license && sight) {
    console.log(
      `${firstName}, you are still underage in this country! Someone else should drive.`
    );
    alert(
      `${firstName}, you are still underage in this country! Someone else should drive.`
    );
  } else {
    alert("Error ⚠️");
  }
}
