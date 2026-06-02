import type { Runnable } from '../../../../../java/lang/Runnable.d.ts'
import type { Thread } from '../../../../../java/lang/Thread.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class JDKAccessor extends Object {
    static isVirtualThread(paramt: Thread): boolean;
    static newVirtualThread(paramname: string, paramrunnable: () => void): Thread;
    private constructor()
}