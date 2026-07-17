import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class Template extends Record {
    static fromString(paramarg0: string): Template;
    constructor(segments: string[], variables: string[])
    // private segments: string[];
    // private variables: string[];
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    instantiate(arg0: JavaMap<string, string>): string;
    segments(): string[];
    // private substitute(arg0: string[]): string;
    toString(): string;
    variables(): string[];
}