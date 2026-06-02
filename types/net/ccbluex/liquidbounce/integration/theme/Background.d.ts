import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Background extends Record {
    constructor(name: string, types: string[])
    // private name: string;
    /*not mapped: */ name(): string;
    // private types: string[];
    /*not mapped: */ types(): string[];
    component1(): string;
    component2(): string[];
    copy(name: string, types: string[]): Background;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}