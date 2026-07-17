import type { JavaMap } from '../../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../../java/util/Map$Entry.d.ts'
import type { JsonElement } from '../../../../../../org/spongepowered/include/com/google/gson/JsonElement.d.ts'
export class JsonObject extends JsonElement {
    constructor()
    // private members: JavaMap<string, JsonElement>;
    add(arg0: string, arg1: JsonElement): void;
    entrySet(): Map$Entry<string, JsonElement>[];
    equals(arg0: Object | null): boolean;
    hashCode(): number;
}