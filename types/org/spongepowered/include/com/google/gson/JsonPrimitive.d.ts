import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Number } from '../../../../../../java/lang/Number.d.ts'
import type { JsonElement } from '../../../../../../org/spongepowered/include/com/google/gson/JsonElement.d.ts'
export class JsonPrimitive extends JsonElement {
    constructor(arg0: boolean)
    constructor(arg0: Number)
    constructor(arg0: string)
    // private value: Object;
    equals(arg0: Object | null): boolean;
    getAsBoolean(): boolean;
    getAsBooleanWrapper(): boolean;
    getAsDouble(): number;
    getAsInt(): number;
    getAsLong(): number;
    getAsNumber(): Number;
    getAsString(): string;
    hashCode(): number;
    isBoolean(): boolean;
    isNumber(): boolean;
    isString(): boolean;
    setValue(arg0: Object): void;
}