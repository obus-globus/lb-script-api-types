import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Function0 } from '../../../../../../kotlin/jvm/functions/Function0.d.ts'
export class LockBasedStorageManager$KeyWithComputation<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends Object {
    constructor(arg0: K, arg1: Function0<V>)
    // private computation: () => V;
    // private key: K;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
}