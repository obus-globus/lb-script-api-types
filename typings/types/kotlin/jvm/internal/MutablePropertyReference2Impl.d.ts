import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { MutablePropertyReference2 } from '../../../kotlin/jvm/internal/MutablePropertyReference2.d.ts'
import type { KDeclarationContainer } from '../../../kotlin/reflect/KDeclarationContainer.d.ts'
export class MutablePropertyReference2Impl extends MutablePropertyReference2 {
    static NO_RECEIVER: Object;
    constructor(arg0: Class<Object>, arg1: string, arg2: string, arg3: number)
    constructor(arg0: KDeclarationContainer, arg1: string, arg2: string)
    get(arg0: Object | null, arg1: Object | null): Object | null;
    set(arg0: Object | null, arg1: Object | null, arg2: Object | null): void;
}