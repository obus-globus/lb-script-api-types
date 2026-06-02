import type { JsonElement } from '../../../../../com/google/gson/JsonElement.d.ts'
import type { FormElement } from '../../../../../net/lenni0451/mcstructs_bedrock/forms/elements/FormElement.d.ts'
import type { ModifiableFormElement } from '../../../../../net/lenni0451/mcstructs_bedrock/forms/elements/ModifiableFormElement.d.ts'
export class SliderFormElement extends FormElement implements ModifiableFormElement {
    constructor(arg0: string, arg1: number, arg2: number, arg3: number)
    constructor(arg0: string, arg1: number, arg2: number, arg3: number, arg4: number)
    readonly current: number;
    readonly defaultValue: number;
    readonly max: number;
    readonly min: number;
    readonly step: number;
    deserialize(arg0: JsonElement): void;
    getCurrent(): number;
    getDefaultValue(): number;
    getMax(): number;
    getMin(): number;
    getStep(): number;
    serialize(): JsonElement;
    setCurrent(arg0: number): void;
}