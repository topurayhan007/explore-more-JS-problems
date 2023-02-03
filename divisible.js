/**
 * 1. Show output from 1 to 50
 * 2. if the number is divisible by 3 then instead of the number show 'foo'
 * 3. if the number is divisible by 5 then instead of the number show 'bar'
 * 4. if the number is divisible by 5 an 3 then instead of the number show 'foobar'
 *
 */

for (let i = 1; i <= 50; i++) {
  const element = i;
  if (element % 3 == 0 && element % 5 == 0) {
    console.log("foobar");
  } else if (element % 3 == 0) {
    console.log("foo");
  } else if (element % 5 == 0) {
    console.log("bar");
  } else {
    console.log(element);
  }
}
