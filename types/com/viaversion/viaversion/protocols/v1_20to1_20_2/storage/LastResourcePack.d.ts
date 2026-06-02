import type { StorableObject } from '../../../../../../com/viaversion/viaversion/api/connection/StorableObject.d.ts'
import type { JsonElement } from '../../../../../../com/viaversion/viaversion/libs/gson/JsonElement.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class LastResourcePack extends Record implements StorableObject {
    // private hash: string;
    // private prompt: JsonElement;
    // private required: boolean;
    // private url: string;
    equals(arg0: Object | null): boolean;
    hash(): string;
    hashCode(): number;
    onRemove(): void;
    prompt(): JsonElement;
    required(): boolean;
    toString(): string;
    url(): string;
}