import type { JsonElement } from '../../../../../com/viaversion/viaversion/libs/gson/JsonElement.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class JsonNull extends JsonElement {
    static INSTANCE: JsonNull;
    constructor()
    deepCopy(): JsonNull;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
}