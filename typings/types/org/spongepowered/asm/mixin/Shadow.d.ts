import type { Annotation } from '../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Shadow extends Annotation, Object{
    /*not mapped: */ aliases(): string[];
    /*not mapped: */ prefix(): string;
    /*not mapped: */ remap(): boolean;
}