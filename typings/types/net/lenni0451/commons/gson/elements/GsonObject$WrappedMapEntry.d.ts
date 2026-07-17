import type { JsonElement } from '../../../../../com/google/gson/JsonElement.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
import type { GsonElement } from '../../../../../net/lenni0451/commons/gson/elements/GsonElement.d.ts'
export class GsonObject$WrappedMapEntry extends Object implements Map$Entry<string, GsonElement> {
    constructor(arg0: Map$Entry<string, JsonElement>)
    // private entry: Map$Entry<string, JsonElement>;
    readonly key: string;
    readonly value: GsonElement;
    setValue(arg0: GsonElement): GsonElement;
}