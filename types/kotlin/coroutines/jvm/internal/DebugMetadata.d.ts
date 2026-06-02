import type { Annotation } from '../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface DebugMetadata extends Annotation, Object{
    constructor(version: number, sourceFile: string, lineNumbers: number[], localNames: string[], spilled: string[], indexToLabel: number[], methodName: string, className: string, nextLineNumbers: number[])
    /*not mapped: */ c(): string;
    /*not mapped: */ i(): number[];
    /*not mapped: */ l(): number[];
    /*not mapped: */ n(): string[];
    /*not mapped: */ m(): string;
    /*not mapped: */ nl(): number[];
    /*not mapped: */ f(): string;
    /*not mapped: */ s(): string[];
    /*not mapped: */ v(): number;
}