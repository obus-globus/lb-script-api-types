import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { PropertyReference0 } from '../../../kotlin/jvm/internal/PropertyReference0.d.ts'
import type { KDeclarationContainer } from '../../../kotlin/reflect/KDeclarationContainer.d.ts'
export class PropertyReference0Impl extends PropertyReference0 {
    static NO_RECEIVER: Object;
    constructor(arg0: Class<Object>, arg1: string, arg2: string, arg3: number)
    constructor(arg0: Object, arg1: Class<Object>, arg2: string, arg3: string, arg4: number)
    constructor(arg0: KDeclarationContainer, arg1: string, arg2: string)
    get(): Object | null;
}