import type { Annotation } from '../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface Cached extends Annotation, Object{
    /*not mapped: */ adopt(): boolean;
    /*not mapped: */ allowUncached(): boolean;
    /*not mapped: */ dimensions(): number;
    /*not mapped: */ inline(): boolean;
    /*not mapped: */ inlineMethod(): string;
    /*not mapped: */ neverDefault(): boolean;
    /*not mapped: */ parameters(): string[];
    /*not mapped: */ uncached(): string;
    /*not mapped: */ value(): string;
    /*not mapped: */ weak(): boolean;
}