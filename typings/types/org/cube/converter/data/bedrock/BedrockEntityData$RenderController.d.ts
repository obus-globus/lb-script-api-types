import type { JsonElement } from '../../../../../com/viaversion/viaversion/libs/gson/JsonElement.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class BedrockEntityData$RenderController extends Record {
    static parse(paramarg0: JsonElement[]): BedrockEntityData$RenderController[];
    constructor(identifier: string, condition: string)
    // private condition: string;
    // private identifier: string;
    condition(): string;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    identifier(): string;
    toString(): string;
}