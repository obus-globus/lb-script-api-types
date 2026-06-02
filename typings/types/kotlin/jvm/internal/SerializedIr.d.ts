import type { Annotation } from '../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface SerializedIr extends Annotation, Object{
    constructor(bytes: string[])
    /*not mapped: */ b(): string[];
}