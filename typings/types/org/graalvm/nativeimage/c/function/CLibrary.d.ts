import type { Annotation } from '../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface CLibrary extends Annotation, Object{
    /*not mapped: */ dependsOn(): string[];
    /*not mapped: */ requireStatic(): boolean;
    /*not mapped: */ value(): string;
}