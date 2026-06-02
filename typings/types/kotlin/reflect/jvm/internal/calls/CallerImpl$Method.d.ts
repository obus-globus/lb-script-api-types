import type { Method } from '../../../../../java/lang/reflect/Method.d.ts'
import type { Type } from '../../../../../java/lang/reflect/Type.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CallerImpl } from '../../../../../kotlin/reflect/jvm/internal/calls/CallerImpl.d.ts'
import type { CallerImpl$Companion } from '../../../../../kotlin/reflect/jvm/internal/calls/CallerImpl$Companion.d.ts'
export class CallerImpl$Method extends CallerImpl<Method> {
    static Companion: CallerImpl$Companion;
    protected constructor(method: Method, requiresInstance: boolean, parameterTypes: Type[])
    // private isVoidMethod: boolean;
    protected callMethod(instance: Object | null, args: (Object | null)[]): Object | null;
}