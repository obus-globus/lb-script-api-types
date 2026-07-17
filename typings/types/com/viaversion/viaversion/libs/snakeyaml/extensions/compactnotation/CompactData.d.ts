import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class CompactData extends Object {
    constructor(arg0: string)
    readonly arguments: string[];
    readonly prefix: string;
    readonly properties: JavaMap<string, string>;
    getArguments(): string[];
    getPrefix(): string;
    getProperties(): JavaMap<string, string>;
    toString(): string;
}