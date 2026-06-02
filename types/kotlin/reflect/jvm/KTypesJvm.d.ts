import type { Object } from '../../../java/lang/Object.d.ts'
import type { KClass } from '../../../kotlin/reflect/KClass.d.ts'
import type { KClassifier } from '../../../kotlin/reflect/KClassifier.d.ts'
import type { KType } from '../../../kotlin/reflect/KType.d.ts'
export class KTypesJvm extends Object {
    static getJvmErasure(paramarg0: KClassifier): KClass<Object>;
    static getJvmErasure(paramarg0: KType): KClass<Object>;
}