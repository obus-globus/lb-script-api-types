import type { Annotation } from '../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { KClass } from '../../../../../kotlin/reflect/KClass.d.ts'
export interface GeneratedBy extends Annotation, Object{
    /*not mapped: */ methodName(): string;
    /*not mapped: */ value(): KClass<Object>;
}