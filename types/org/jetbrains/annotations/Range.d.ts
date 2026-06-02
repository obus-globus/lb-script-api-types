import type { Annotation } from '../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface Range extends Annotation, Object{
    constructor(from: number, to: number)
    /*not mapped: */ from(): number;
    /*not mapped: */ to(): number;
}