import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class CompactData extends Object {
    constructor(arg0: string)
    readonly arguments: string[];
    readonly prefix: string;
    readonly properties: { [key: string]: string };
    getArguments(): string[];
    getPrefix(): string;
    getProperties(): { [key: string]: string };
    toString(): string;
}