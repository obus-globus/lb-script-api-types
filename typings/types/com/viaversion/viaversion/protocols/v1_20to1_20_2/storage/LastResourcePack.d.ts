import type { JsonElement } from '../../../../../../com/viaversion/viaversion/libs/gson/JsonElement.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class LastResourcePack extends Record {
    constructor(url: string, hash: string, required: boolean, prompt: JsonElement)
    // private hash: string;
    // private prompt: JsonElement;
    // private required: boolean;
    // private url: string;
    equals(arg0: Object | null): boolean;
    hash(): string;
    hashCode(): number;
    prompt(): JsonElement;
    required(): boolean;
    toString(): string;
    url(): string;
}