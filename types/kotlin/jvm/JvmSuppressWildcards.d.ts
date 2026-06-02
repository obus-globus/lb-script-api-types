import type { Annotation } from '../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface JvmSuppressWildcards extends Annotation, Object{
    constructor(suppress: boolean)
    /*not mapped: */ suppress(): boolean;
}