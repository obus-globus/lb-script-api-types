import type { Annotation } from '../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface Group extends Annotation, Object{
    constructor(max: number, min: number, name: string)
    /*not mapped: */ max(): number;
    /*not mapped: */ min(): number;
    /*not mapped: */ name(): string;
}