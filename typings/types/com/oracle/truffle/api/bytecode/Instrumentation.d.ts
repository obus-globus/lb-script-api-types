import type { Annotation } from '../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface Instrumentation extends Annotation, Object{
    /*not mapped: */ forceCached(): boolean;
    /*not mapped: */ javadoc(): string;
    /*not mapped: */ storeBytecodeIndex(): boolean;
}