import type { Types$TypeVariableImpl } from '../../../../com/google/common/reflect/Types$TypeVariableImpl.d.ts'
import type { InvocationHandler } from '../../../../java/lang/reflect/InvocationHandler.d.ts'
import type { Method } from '../../../../java/lang/reflect/Method.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Types$TypeVariableInvocationHandler extends Object implements InvocationHandler {
    constructor(typeVariableImpl: Types$TypeVariableImpl<any>)
    // private typeVariableImpl: Types$TypeVariableImpl<any>;
    invoke(proxy: Object, method: Method, args: Object[]): Object;
}