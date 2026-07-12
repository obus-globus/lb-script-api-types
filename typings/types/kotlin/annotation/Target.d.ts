import type { Annotation } from '../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { AnnotationTarget } from '../../kotlin/annotation/AnnotationTarget.d.ts'
export interface Target extends Annotation, Object{
    constructor(...allowedTargets: AnnotationTarget[])
    /*not mapped: */ allowedTargets(): AnnotationTarget[];
}