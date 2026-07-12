import type { Annotation } from '../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { KClass } from '../../../../../kotlin/reflect/KClass.d.ts'
export interface ImportStatic extends Annotation, Object{
    constructor(...value: KClass<Object>[])
    /*not mapped: */ value(): KClass<Object>[];
}