import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class SkinData$PersonaPieceTintData extends Record {
    constructor(type: string, colors: string[])
    // private colors: string[];
    // private type: string;
    colors(): string[];
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    toString(): string;
    type(): string;
}