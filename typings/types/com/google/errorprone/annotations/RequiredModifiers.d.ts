import type { Modifier } from '../../../../com/google/errorprone/annotations/Modifier.d.ts'
import type { Modifier as Modifier_2 } from '../../../../javax/lang/model/element/Modifier.d.ts'
import type { Annotation } from '../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface RequiredModifiers extends Annotation, Object{
    /*not mapped: */ modifier(): Modifier[];
    /*not mapped: */ value(): Modifier_2[];
}