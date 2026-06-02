import type { Annotation } from '../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface GenerateInline extends Annotation, Object{
    constructor(inherit: boolean, inlineByDefault: boolean, value: boolean)
    /*not mapped: */ inherit(): boolean;
    /*not mapped: */ inlineByDefault(): boolean;
    /*not mapped: */ value(): boolean;
}