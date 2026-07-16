import type { Annotation } from '../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface Range extends Annotation, Object{
    /*not mapped: */ from(): number;
    /*not mapped: */ to(): number;
}