import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class FogDefinitions$FogDefinition extends Record {
    constructor(identifier: string, colors: { [key: string]: number })
    // private colors: { [key: string]: number };
    // private identifier: string;
    colors(): { [key: string]: number };
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    identifier(): string;
    toString(): string;
}