import type { JavaMap } from '../../../JavaMap.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { KCallable } from '../../../kotlin/reflect/KCallable.d.ts'
import type { KParameter } from '../../../kotlin/reflect/KParameter.d.ts'
export class KCallables extends Object {
    static callSuspend<R extends unknown>(self: KCallable<R>, ...args: (Object | null)[]): R;
    static callSuspendBy<R extends unknown>(self: KCallable<R>, args: JavaMap<KParameter, Object | null>): R;
    static findParameterByName(self: KCallable<Object>, name: string): KParameter | null;
    static getContextParameters(paramarg0: KCallable<Object>): KParameter[];
    static getExtensionReceiverParameter(paramarg0: KCallable<Object>): KParameter;
    static getInstanceParameter(paramarg0: KCallable<Object>): KParameter;
    static getValueParameters(paramarg0: KCallable<Object>): KParameter[];
}