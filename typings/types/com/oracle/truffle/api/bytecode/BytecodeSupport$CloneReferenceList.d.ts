import type { WeakReference } from '../../../../../java/lang/ref/WeakReference.d.ts'
import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class BytecodeSupport$CloneReferenceList<T extends Object | number | string | boolean> extends Object {
    constructor()
    // private references: WeakReference<T>[];
    // private size: number;
    add(reference: T): void;
    // private cleanup(): void;
    forEach(forEach: (param0: T) => void): void;
    // private resize(): void;
}