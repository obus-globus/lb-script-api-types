import type { Random } from '../../../../../java/util/Random.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../java/util/Iterator.d.ts'
export class InputStringGenerator$LotteryBox extends Object implements Iterator<number> {
    private constructor(rng: Random, nChoices: number)
    // private choices: number[];
    // private nChoices: number;
    // private rng: Random;
    forEachRemaining(arg0: (param0: T) => void): void;
    hasNext(): boolean;
    next(): number;
}