import type { Modifier } from '../../../../com/google/errorprone/annotations/Modifier.d.ts'
import type { Modifier as Modifier_2 } from '../../../../javax/lang/model/element/Modifier.d.ts'
import type { Annotation } from '../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface IncompatibleModifiers extends Annotation, Object{
    constructor(modifier: Modifier[], value: Modifier_2[])
    /*not mapped: */ modifier(): Modifier[];
    /*not mapped: */ value(): Modifier_2[];
}