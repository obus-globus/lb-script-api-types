import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class FogDefinitions$FogDefinition extends Record {
    constructor(identifier: string, colors: JavaMap<string, number>)
    // private colors: JavaMap<string, number>;
    // private identifier: string;
    colors(): JavaMap<string, number>;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    identifier(): string;
    toString(): string;
}