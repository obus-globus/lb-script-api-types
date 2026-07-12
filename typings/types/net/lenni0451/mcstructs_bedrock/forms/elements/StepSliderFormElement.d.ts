import type { JsonElement } from '../../../../../com/google/gson/JsonElement.d.ts'
import type { FormElement } from '../../../../../net/lenni0451/mcstructs_bedrock/forms/elements/FormElement.d.ts'
import type { ModifiableFormElement } from '../../../../../net/lenni0451/mcstructs_bedrock/forms/elements/ModifiableFormElement.d.ts'
export class StepSliderFormElement extends FormElement implements ModifiableFormElement {
    constructor(arg0: string, ...arg1: string[])
    constructor(arg0: string, arg1: number, ...arg2: string[])
    readonly defaultStep: number;
    readonly selected: number;
    readonly steps: string[];
    deserialize(arg0: JsonElement): void;
    getDefaultStep(): number;
    getSelected(): number;
    getSteps(): string[];
    getSteps(arg0: boolean): string[];
    serialize(): JsonElement;
    setSelected(arg0: number): void;
}