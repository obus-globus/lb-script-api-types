import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { PropertyReference } from '../../../kotlin/jvm/internal/PropertyReference.d.ts'
import type { KMutableProperty } from '../../../kotlin/reflect/KMutableProperty.d.ts'
export abstract class MutablePropertyReference extends PropertyReference implements KMutableProperty<Object> {
    static NO_RECEIVER: Object;
    constructor()
    constructor(arg0: Object)
    constructor(arg0: Object, arg1: Class<Object>, arg2: string, arg3: string, arg4: number)
}