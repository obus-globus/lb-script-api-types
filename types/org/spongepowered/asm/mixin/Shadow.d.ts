import type { Annotation } from '../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Shadow extends Annotation, Object{
    constructor(aliases: string[], prefix: string, remap: boolean)
    /*not mapped: */ aliases(): string[];
    /*not mapped: */ prefix(): string;
    /*not mapped: */ remap(): boolean;
}