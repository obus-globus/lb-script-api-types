import type { Annotation } from '../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface Header extends Annotation, Object{
    /*not mapped: */ allowUnsafeNonAsciiValues(): boolean;
    /*not mapped: */ value(): string;
}