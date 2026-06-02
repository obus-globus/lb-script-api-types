import type { Annotation } from '../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface PropertyKey extends Annotation, Object{
    constructor(resourceBundle: string)
    /*not mapped: */ resourceBundle(): string;
}