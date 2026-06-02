import type { Modifier } from '../../../../com/google/errorprone/annotations/Modifier.d.ts'
import type { Modifier } from '../../../../javax/lang/model/element/Modifier.d.ts'
import type { Annotation } from '../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface RequiredModifiers extends Annotation, Object{
    constructor(modifier: Modifier[], value: Modifier[])
    /*not mapped: */ modifier(): Modifier[];
    /*not mapped: */ value(): Modifier[];
}