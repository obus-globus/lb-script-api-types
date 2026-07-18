import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ParseResult extends Object {
    constructor(mapping: JavaMap<string, string[]>)
    // private mapping: JavaMap<string, string[]>;
    contains(key: string): boolean;
    get(key: string): string | null;
    getAll(key: string): string[];
}