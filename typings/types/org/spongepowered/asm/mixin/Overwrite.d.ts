import type { Annotation } from '../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Overwrite extends Annotation, Object{
    constructor(aliases: string[], constraints: string, remap: boolean)
    /*not mapped: */ aliases(): string[];
    /*not mapped: */ constraints(): string;
    /*not mapped: */ remap(): boolean;
}