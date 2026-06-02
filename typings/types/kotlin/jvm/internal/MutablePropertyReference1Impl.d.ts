import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MutablePropertyReference1 } from '../../../kotlin/jvm/internal/MutablePropertyReference1.d.ts'
import type { KDeclarationContainer } from '../../../kotlin/reflect/KDeclarationContainer.d.ts'
export class MutablePropertyReference1Impl extends MutablePropertyReference1 {
    static NO_RECEIVER: Object;
    constructor(arg0: Class<Object>, arg1: string, arg2: string, arg3: number)
    constructor(arg0: Object, arg1: Class<Object>, arg2: string, arg3: string, arg4: number)
    constructor(arg0: KDeclarationContainer, arg1: string, arg2: string)
    get(arg0: Object | null): Object | null;
    set(arg0: Object | null, arg1: Object | null): void;
}