import type { Annotation } from '../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Overwrite extends Annotation, Object{
    /*not mapped: */ aliases(): string[];
    /*not mapped: */ constraints(): string;
    /*not mapped: */ remap(): boolean;
}