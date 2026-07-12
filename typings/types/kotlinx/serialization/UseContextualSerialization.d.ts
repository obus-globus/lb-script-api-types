import type { Annotation } from '../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { KClass } from '../../kotlin/reflect/KClass.d.ts'
export interface UseContextualSerialization extends Annotation, Object{
    constructor(...forClasses: KClass<Object>[])
    /*not mapped: */ forClasses(): KClass<Object>[];
}