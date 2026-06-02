import type { Constructor } from '../../../../../java/lang/reflect/Constructor.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CallerImpl } from '../../../../../kotlin/reflect/jvm/internal/calls/CallerImpl.d.ts'
import type { CallerImpl$Companion } from '../../../../../kotlin/reflect/jvm/internal/calls/CallerImpl$Companion.d.ts'
export class CallerImpl$Constructor extends CallerImpl<Constructor<Object>> {
    static Companion: CallerImpl$Companion;
    constructor(constructor: Constructor<Object>)
    call(args: (Object | null)[]): Object | null;
}