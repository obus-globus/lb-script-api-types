import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { FunctionReference } from '../../../kotlin/jvm/internal/FunctionReference.d.ts'
import type { KDeclarationContainer } from '../../../kotlin/reflect/KDeclarationContainer.d.ts'
export class FunctionReferenceImpl extends FunctionReference {
    static NO_RECEIVER: Object;
    constructor(arg0: number, arg1: Class<Object>, arg2: string, arg3: string, arg4: number)
    constructor(arg0: number, arg1: Object, arg2: Class<Object>, arg3: string, arg4: string, arg5: number)
    constructor(arg0: number, arg1: KDeclarationContainer, arg2: string, arg3: string)
}