import type { Constructor } from '../../../../../java/lang/reflect/Constructor.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BoundCaller } from '../../../../../kotlin/reflect/jvm/internal/calls/BoundCaller.d.ts'
import type { CallerImpl } from '../../../../../kotlin/reflect/jvm/internal/calls/CallerImpl.d.ts'
import type { CallerImpl$Companion } from '../../../../../kotlin/reflect/jvm/internal/calls/CallerImpl$Companion.d.ts'
export class CallerImpl$AccessorForHiddenBoundConstructor extends CallerImpl<Constructor<Object>> implements BoundCaller {
    static Companion: CallerImpl$Companion;
    constructor(constructor: Constructor<Object>, boundReceiver: Object | null)
    // private boundReceiver: Object | null;
    call(args: (Object | null)[]): Object | null;
}