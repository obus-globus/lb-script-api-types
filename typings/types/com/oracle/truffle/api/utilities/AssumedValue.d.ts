import type { Assumption } from '../../../../../com/oracle/truffle/api/Assumption.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class AssumedValue<T extends unknown> extends Object {
    constructor(initialValue: T)
    constructor(name: string, initialValue: T)
    // private assumption: Assumption;
    // private name: string;
    // private value: T;
    get(): T;
    set(newValue: T): void;
}