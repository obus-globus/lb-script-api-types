import type { Annotation } from '../../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { KClass } from '../../../../../../kotlin/reflect/KClass.d.ts'
export interface InjectionInfo$AnnotationType extends Annotation, Object{
    constructor(value: KClass<Annotation>)
    /*not mapped: */ value(): KClass<Annotation>;
}