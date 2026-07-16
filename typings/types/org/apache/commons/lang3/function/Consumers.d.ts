import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Consumers extends Object {
    static accept<T extends unknown>(paramarg0: (param0: T) => void, paramarg1: T): void;
    static nop<T extends unknown>(): (param0: T) => void;
    private constructor()
}