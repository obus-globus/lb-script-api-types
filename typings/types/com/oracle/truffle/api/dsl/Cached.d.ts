import type { Annotation } from '../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface Cached extends Annotation, Object{
    constructor(adopt: boolean, allowUncached: boolean, dimensions: number, inline: boolean, inlineMethod: string, neverDefault: boolean, parameters: string[], uncached: string, value: string, weak: boolean)
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