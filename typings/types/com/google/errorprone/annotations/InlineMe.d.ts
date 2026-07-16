import type { Annotation } from '../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface InlineMe extends Annotation, Object{
    /*not mapped: */ imports(): string[];
    /*not mapped: */ replacement(): string;
    /*not mapped: */ staticImports(): string[];
}