import {createEvmMemo} from "../src";


const main = () => {
  const expected = '0a1c0801120242681a14d069e846082133cffd874ceb1109a5c0ec0bbd38'
  const result = createEvmMemo("0xD069E846082133cFFd874CEB1109a5c0eC0bBd38", BigInt(17_000));
  console.log(result);
  if (result !== expected) {
    throw Error(`wrong memo\n\texpected: ${expected}\n\tgot: ${result}`)
  }
}

main();