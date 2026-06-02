import type { Annotation } from '../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
import type { KClass } from '../kotlin/reflect/KClass.d.ts'
export interface OptIn extends Annotation, Object{
    constructor(markerClass: KClass<Annotation>[])
    /*not mapped: */ markerClass(): KClass<Annotation>[];
}