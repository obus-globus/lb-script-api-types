import type { IllegalArgumentException } from '../../../java/lang/IllegalArgumentException.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { KClass } from '../../../kotlin/reflect/KClass.d.ts'
export class SerializerAlreadyRegisteredException extends IllegalArgumentException {
    constructor(msg: string)
    constructor(baseClass: KClass<Object>, concreteClass: KClass<Object>)
}