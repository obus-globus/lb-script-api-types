import type { Annotation } from '../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Language extends Annotation, Object{
    /*not mapped: */ prefix(): string;
    /*not mapped: */ suffix(): string;
    /*not mapped: */ value(): string;
}