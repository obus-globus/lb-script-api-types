import type { Runnable } from '../../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class GameTestEvent extends Object {
    private constructor(expectedDelay: number, minimumDelay: number, assertion: () => void)
    assertion: () => void;
    expectedDelay: number;
    minimumDelay: number;
}