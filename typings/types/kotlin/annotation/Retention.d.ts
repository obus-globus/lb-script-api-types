import type { Annotation } from '../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { AnnotationRetention } from '../../kotlin/annotation/AnnotationRetention.d.ts'
export interface Retention extends Annotation, Object{
    constructor(value: AnnotationRetention)
    /*not mapped: */ value(): AnnotationRetention;
}