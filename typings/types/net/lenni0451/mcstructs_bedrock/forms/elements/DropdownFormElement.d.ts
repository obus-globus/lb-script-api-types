import type { JsonElement } from '../../../../../com/google/gson/JsonElement.d.ts'
import type { FormElement } from '../../../../../net/lenni0451/mcstructs_bedrock/forms/elements/FormElement.d.ts'
import type { ModifiableFormElement } from '../../../../../net/lenni0451/mcstructs_bedrock/forms/elements/ModifiableFormElement.d.ts'
export class DropdownFormElement extends FormElement implements ModifiableFormElement {
    constructor(arg0: string, ...arg1: string[])
    constructor(arg0: string, arg1: number, ...arg2: string[])
    readonly defaultOption: number;
    readonly options: string[];
    readonly selected: number;
    deserialize(arg0: JsonElement): void;
    getDefaultOption(): number;
    getOptions(): string[];
    getOptions(arg0: boolean): string[];
    getSelected(): number;
    serialize(): JsonElement;
    setSelected(arg0: number): void;
}