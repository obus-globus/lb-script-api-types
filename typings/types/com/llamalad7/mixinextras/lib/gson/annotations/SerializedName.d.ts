import type { Annotation } from '../../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface SerializedName extends Annotation, Object{
    constructor(alternate: string[], value: string)
    /*not mapped: */ alternate(): string[];
    /*not mapped: */ value(): string;
}