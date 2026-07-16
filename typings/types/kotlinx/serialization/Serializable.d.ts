import type { Annotation } from '../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { KClass } from '../../kotlin/reflect/KClass.d.ts'
import type { KSerializer } from '../../kotlinx/serialization/KSerializer.d.ts'
export interface Serializable extends Annotation, Object{
    /*not mapped: */ with(): KClass<KSerializer<Object>>;
}