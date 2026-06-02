import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Ops extends Record {
    static parse(paramjson: string): Ops;
    constructor(ops: string[])
    // private ops: string[];
    equals(o: Object | null): boolean;
    hashCode(): number;
    ops(): string[];
    toString(): string;
}