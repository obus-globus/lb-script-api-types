import type { Annotation } from '../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface RegExp extends Annotation, Object{
    constructor(prefix: string, suffix: string)
    /*not mapped: */ prefix(): string;
    /*not mapped: */ suffix(): string;
}