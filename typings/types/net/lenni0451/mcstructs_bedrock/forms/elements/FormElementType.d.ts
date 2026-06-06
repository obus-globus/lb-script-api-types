import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { FormElement } from '../../../../../net/lenni0451/mcstructs_bedrock/forms/elements/FormElement.d.ts'
export class FormElementType extends Enum<FormElementType> {
    static BUTTON: FormElementType;
    static CHECKBOX: FormElementType;
    static DIVIDER: FormElementType;
    static DROPDOWN: FormElementType;
    static HEADER: FormElementType;
    static LABEL: FormElementType;
    static SLIDER: FormElementType;
    static STEP_SLIDER: FormElementType;
    static TEXT_FIELD: FormElementType;
    static byName(paramarg0: string): FormElementType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): FormElementType;
    static values(): (Object | null)[];
    private constructor(arg2: Class<FormElement>, arg3: string)
    readonly type: Class<FormElement>;
    getName(): string;
    getType(): Class<FormElement>;
    name(): "CHECKBOX" | "DROPDOWN" | "LABEL" | "SLIDER" | "STEP_SLIDER" | "TEXT_FIELD" | "DIVIDER" | "HEADER" | "BUTTON";
}