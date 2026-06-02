import type { Method } from '../../../../../../../../java/lang/reflect/Method.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
export class Java16SealedRecordLoader$Cache extends Object {
    constructor(arg0: Method, arg1: Method, arg2: Method, arg3: Method)
    readonly getPermittedSubclasses: Method;
    readonly getRecordComponents: Method;
    // private isRecord: Method;
    // private isSealed: Method;
    getGetPermittedSubclasses(): Method;
    getGetRecordComponents(): Method;
    isRecord(): Method;
    isSealed(): Method;
}