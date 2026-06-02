import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class StringTemplate extends Object {
    static isValidVariableName(paramarg0: string): boolean;
    static parse(paramarg0: string): StringTemplate;
    constructor(arg0: string[], arg1: string[])
    readonly segments: string[];
    readonly variables: string[];
    equals(arg0: Object | null): boolean;
    getSegments(): string[];
    getVariables(): string[];
    hashCode(): number;
    substitute(arg0: string[]): string;
    toString(): string;
}