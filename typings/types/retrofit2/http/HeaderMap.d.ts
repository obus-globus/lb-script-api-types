import type { Annotation } from '../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface HeaderMap extends Annotation, Object{
    constructor(allowUnsafeNonAsciiValues: boolean)
    /*not mapped: */ allowUnsafeNonAsciiValues(): boolean;
}