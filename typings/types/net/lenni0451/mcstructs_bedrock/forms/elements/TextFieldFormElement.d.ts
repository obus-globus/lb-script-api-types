import type { JsonElement } from '../../../../../com/google/gson/JsonElement.d.ts'
import type { FormElement } from '../../../../../net/lenni0451/mcstructs_bedrock/forms/elements/FormElement.d.ts'
import type { ModifiableFormElement } from '../../../../../net/lenni0451/mcstructs_bedrock/forms/elements/ModifiableFormElement.d.ts'
export class TextFieldFormElement extends FormElement implements ModifiableFormElement {
    constructor(arg0: string, arg1: string)
    constructor(arg0: string, arg1: string, arg2: string)
    readonly defaultValue: string;
    readonly placeholder: string;
    readonly value: string;
    deserialize(arg0: JsonElement): void;
    getDefaultValue(): string;
    getPlaceholder(): string;
    getValue(): string;
    serialize(): JsonElement;
    setValue(arg0: string): void;
}