import type { JsonObject } from '../../../../../../com/viaversion/viaversion/libs/gson/JsonObject.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class BedrockRenderController$Array extends Record {
    static parse(paramarg0: JsonObject): BedrockRenderController$Array[];
    constructor(name: string, values: string[])
    // private name: string;
    // private values: string[];
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    name(): string;
    toString(): string;
    values(): string[];
}