import type { Object } from '../../../java/lang/Object.d.ts'
import type { Continuation } from '../../../kotlin/coroutines/Continuation.d.ts'
import type { KCallable } from '../../../kotlin/reflect/KCallable.d.ts'
import type { KParameter } from '../../../kotlin/reflect/KParameter.d.ts'
export class KCallables extends Object {
    static callSuspend(paramarg0: KCallable<Object>, paramarg1: Object[], paramarg2: Continuation<Object>): Object;
    static callSuspendBy(paramarg0: KCallable<Object>, paramarg1: Map<KParameter, Object>, paramarg2: Continuation<Object>): Object;
    static findParameterByName(paramarg0: KCallable<Object>, paramarg1: string): KParameter;
    static getContextParameters(paramarg0: KCallable<Object>): KParameter[];
    static getExtensionReceiverParameter(paramarg0: KCallable<Object>): KParameter;
    static getInstanceParameter(paramarg0: KCallable<Object>): KParameter;
    static getValueParameters(paramarg0: KCallable<Object>): KParameter[];
}