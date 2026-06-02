import type { JsonElement } from '../../../../../com/google/gson/JsonElement.d.ts'
import type { JsonPrimitive } from '../../../../../com/google/gson/JsonPrimitive.d.ts'
import type { Number } from '../../../../../java/lang/Number.d.ts'
import type { GsonElement } from '../../../../../net/lenni0451/commons/gson/elements/GsonElement.d.ts'
export class GsonPrimitive extends GsonElement {
    static wrap(paramarg0: JsonElement): GsonElement;
    constructor(arg0: JsonPrimitive)
    constructor(arg0: boolean)
    constructor(arg0: Number)
    constructor(arg0: string)
    readonly primitive: JsonPrimitive;
    getJsonPrimitive(): JsonPrimitive;
    isBoolean(): boolean;
    isNumber(): boolean;
    isString(): boolean;
}