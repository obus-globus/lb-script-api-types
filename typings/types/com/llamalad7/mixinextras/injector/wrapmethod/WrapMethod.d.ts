import type { Annotation } from '../../../../../java/lang/annotation/Annotation.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface WrapMethod extends Annotation, Object{
    constructor(allow: number, expect: number, method: string[], order: number, remap: boolean, require: number)
    /*not mapped: */ allow(): number;
    /*not mapped: */ expect(): number;
    /*not mapped: */ method(): string[];
    /*not mapped: */ order(): number;
    /*not mapped: */ remap(): boolean;
    /*not mapped: */ require(): number;
}