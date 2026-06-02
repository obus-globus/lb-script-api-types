import type { Assumption } from '../../../../com/oracle/truffle/api/Assumption.d.ts'
import type { TruffleWeakReference } from '../../../../com/oracle/truffle/api/utilities/TruffleWeakReference.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class WeakAssumedValue$Profile<V extends Object | number | string | boolean> extends Object {
    private constructor()
    private constructor(value: V, name: string)
    // private assumption: Assumption;
    // private reference: TruffleWeakReference<V>;
    get(): V;
}