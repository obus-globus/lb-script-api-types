import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class LockBasedStorageManager$KeyWithComputation<K extends unknown, V extends unknown> extends Object {
    constructor(arg0: K, arg1: () => V)
    // private computation: () => V;
    // private key: K;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
}