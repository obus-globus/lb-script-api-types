import type { Annotation } from '../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface PartMap extends Annotation, Object{
    constructor(encoding: string)
    /*not mapped: */ encoding(): string;
}