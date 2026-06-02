import type { Method } from '../../../../../java/lang/reflect/Method.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BoundCaller } from '../../../../../kotlin/reflect/jvm/internal/calls/BoundCaller.d.ts'
import type { InternalUnderlyingValOfInlineClass } from '../../../../../kotlin/reflect/jvm/internal/calls/InternalUnderlyingValOfInlineClass.d.ts'
export class InternalUnderlyingValOfInlineClass$Bound extends InternalUnderlyingValOfInlineClass implements BoundCaller {
    constructor(unboxMethod: Method, boundReceiver: Object | null)
    // private boundReceiver: Object | null;
    call(args: (Object | null)[]): Object | null;
}