import type { JsonElement } from '../../../../../com/google/gson/JsonElement.d.ts'
import type { FormElement } from '../../../../../net/lenni0451/mcstructs_bedrock/forms/elements/FormElement.d.ts'
import type { ModifiableFormElement } from '../../../../../net/lenni0451/mcstructs_bedrock/forms/elements/ModifiableFormElement.d.ts'
export class CheckboxFormElement extends FormElement implements ModifiableFormElement {
    constructor(arg0: string)
    constructor(arg0: string, arg1: boolean)
    readonly checked: boolean;
    readonly defaultValue: boolean;
    deserialize(arg0: JsonElement): void;
    getDefaultValue(): boolean;
    isChecked(): boolean;
    serialize(): JsonElement;
    setChecked(arg0: boolean): void;
}