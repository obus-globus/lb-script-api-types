import type { JsonElement } from '../../../../../com/google/gson/JsonElement.d.ts'
import type { GsonElement } from '../../../../../net/lenni0451/commons/gson/elements/GsonElement.d.ts'
export class GsonArray {
    // A14 statics-only surface: instances of this collection-backed type
    // render structurally (arrays / maps); only the statics are declared here.
    static wrap(paramarg0: JsonElement): GsonElement;
}