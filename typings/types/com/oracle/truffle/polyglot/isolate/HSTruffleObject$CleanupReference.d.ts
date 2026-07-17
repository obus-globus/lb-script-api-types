import type { CleanableWeakReference } from '../../../../../com/oracle/truffle/polyglot/isolate/CleanableWeakReference.d.ts'
import type { GuestContext } from '../../../../../com/oracle/truffle/polyglot/isolate/GuestContext.d.ts'
import type { HSTruffleObject } from '../../../../../com/oracle/truffle/polyglot/isolate/HSTruffleObject.d.ts'
import type { WeakReference } from '../../../../../java/lang/ref/WeakReference.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class HSTruffleObject$CleanupReference extends CleanableWeakReference<HSTruffleObject> {
    static reachabilityFence(paramarg0: Object): void;
    constructor(reference: HSTruffleObject, context: GuestContext, hostObjectId: number)
    // private contextRef: WeakReference<GuestContext>;
    // private hostObjectId: number;
    run(): void;
}