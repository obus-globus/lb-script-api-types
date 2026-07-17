import type { InvocationHandler } from '../../../../../java/lang/reflect/InvocationHandler.d.ts'
import type { Method } from '../../../../../java/lang/reflect/Method.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class EventUtils$EventBindingInvocationHandler extends Object implements InvocationHandler {
    constructor(arg0: Object, arg1: string, arg2: string[])
    // private eventTypes: string[];
    // private methodName: string;
    // private target: Object;
    // private hasMatchingParametersMethod(arg0: Method): boolean;
    invoke(arg0: Object, arg1: Method, arg2: Object[]): Object;
}