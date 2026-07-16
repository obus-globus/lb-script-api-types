import type { Serializable } from '../../../../../../../java/io/Serializable.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export abstract class Optional<T extends unknown> extends Object implements Serializable {
    static absent<T extends unknown>(): Optional<T>;
    constructor()
    or(arg0: T): T;
}