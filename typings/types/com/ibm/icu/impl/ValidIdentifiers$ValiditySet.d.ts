import type { Object } from '../../../../java/lang/Object.d.ts'
export class ValidIdentifiers$ValiditySet extends Object {
    constructor(arg0: string[], arg1: boolean)
    regularData: string[];
    subdivisionData: { [key: string]: string[] };
    contains(arg0: string): boolean;
    contains(arg0: string, arg1: string): boolean;
    toString(): string;
}