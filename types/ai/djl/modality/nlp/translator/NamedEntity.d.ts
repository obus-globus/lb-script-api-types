import type { Object } from '../../../../../java/lang/Object.d.ts'
export class NamedEntity extends Object {
    constructor(arg0: string, arg1: number, arg2: number, arg3: string, arg4: number, arg5: number)
    readonly end: number;
    readonly entity: string;
    readonly index: number;
    readonly score: number;
    readonly start: number;
    readonly word: string;
    getEnd(): number;
    getEntity(): string;
    getIndex(): number;
    getScore(): number;
    getStart(): number;
    getWord(): string;
    toString(): string;
}