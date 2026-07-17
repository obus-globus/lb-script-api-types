import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ValidIdentifiers$ValiditySet extends Object {
    constructor(arg0: string[], arg1: boolean)
    regularData: string[];
    subdivisionData: JavaMap<string, string[]>;
    contains(arg0: string): boolean;
    contains(arg0: string, arg1: string): boolean;
    toString(): string;
}