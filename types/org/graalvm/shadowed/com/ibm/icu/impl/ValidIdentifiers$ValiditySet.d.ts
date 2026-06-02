import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class ValidIdentifiers$ValiditySet extends Object {
    constructor(plainData: string[], makeMap: boolean)
    regularData: string[];
    subdivisionData: { [key: string]: string[] };
    contains(code: string): boolean;
    contains(key: string, value: string): boolean;
    toString(): string;
}