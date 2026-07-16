import type { Annotation } from '../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface Transient extends Annotation, Object{
    /*not mapped: */ value(): boolean;
}