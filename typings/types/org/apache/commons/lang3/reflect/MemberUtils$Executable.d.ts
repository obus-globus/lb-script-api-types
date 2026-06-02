import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Constructor } from '../../../../../java/lang/reflect/Constructor.d.ts'
import type { Method } from '../../../../../java/lang/reflect/Method.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class MemberUtils$Executable extends Object {
    private constructor(arg0: Constructor<Object>)
    private constructor(arg0: Method)
    // private isVarArgs: boolean;
    readonly parameterTypes: Class<Object>[];
    getParameterTypes(): Class<Object>[];
    isVarArgs(): boolean;
}