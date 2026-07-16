import type { Annotation } from '../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface FieldMap extends Annotation, Object{
    /*not mapped: */ encoded(): boolean;
}