import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class StringTemplate extends Record {
    static fromString(paraminput: string): StringTemplate;
    static isValidVariableName(paramvariable: string): boolean;
    constructor(segments: string[], variables: string[])
    // private segments: string[];
    // private variables: string[];
    equals(o: Object | null): boolean;
    hashCode(): number;
    segments(): string[];
    substitute(arguments: string[]): string;
    toString(): string;
    variables(): string[];
}