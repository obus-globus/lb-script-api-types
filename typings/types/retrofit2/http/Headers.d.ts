import type { Annotation } from '../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface Headers extends Annotation, Object{
    constructor(allowUnsafeNonAsciiValues: boolean, ...value: string[])
    /*not mapped: */ allowUnsafeNonAsciiValues(): boolean;
    /*not mapped: */ value(): string[];
}