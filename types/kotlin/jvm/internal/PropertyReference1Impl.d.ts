import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { PropertyReference1 } from '../../../kotlin/jvm/internal/PropertyReference1.d.ts'
import type { KDeclarationContainer } from '../../../kotlin/reflect/KDeclarationContainer.d.ts'
export class PropertyReference1Impl extends PropertyReference1 {
    static NO_RECEIVER: Object;
    constructor(arg0: Class<Object>, arg1: string, arg2: string, arg3: number)
    constructor(arg0: Object, arg1: Class<Object>, arg2: string, arg3: string, arg4: number)
    constructor(arg0: KDeclarationContainer, arg1: string, arg2: string)
    get(arg0: Object | null): Object | null;
}