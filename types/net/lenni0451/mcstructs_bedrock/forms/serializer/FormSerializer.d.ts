import type { JsonElement } from '../../../../../com/google/gson/JsonElement.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Form } from '../../../../../net/lenni0451/mcstructs_bedrock/forms/Form.d.ts'
export class FormSerializer extends Object {
    static deserialize(paramarg0: JsonElement): Form;
    static deserialize(paramarg0: string): Form;
    static deserializeLenientReader(paramarg0: string): Form;
    static deserializeReader(paramarg0: string): Form;
    static deserializeReader(paramarg0: string, paramarg1: boolean): Form;
    static serialize(paramarg0: Form): string;
    static serializeJson(paramarg0: Form): JsonElement;
    constructor()
}