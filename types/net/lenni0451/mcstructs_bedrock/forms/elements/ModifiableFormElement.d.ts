import type { JsonElement } from '../../../../../com/google/gson/JsonElement.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface ModifiableFormElement extends Object{
    deserialize(arg0: JsonElement): void;
    serialize(): JsonElement;
}