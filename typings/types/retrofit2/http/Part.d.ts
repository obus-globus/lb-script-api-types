import type { Annotation } from '../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface Part extends Annotation, Object{
    constructor(encoding: string, value: string)
    /*not mapped: */ encoding(): string;
    /*not mapped: */ value(): string;
}