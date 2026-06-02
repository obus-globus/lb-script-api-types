import type { Annotation } from '../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
export interface Metadata extends Annotation, Object{
    constructor(kind: number, metadataVersion: number[], bytecodeVersion: number[], data1: string[], data2: string[], extraString: string, packageName: string, extraInt: number)
    /*not mapped: */ bv(): number[];
    /*not mapped: */ d1(): string[];
    /*not mapped: */ d2(): string[];
    /*not mapped: */ xi(): number;
    /*not mapped: */ xs(): string;
    /*not mapped: */ k(): number;
    /*not mapped: */ mv(): number[];
    /*not mapped: */ pn(): string;
}