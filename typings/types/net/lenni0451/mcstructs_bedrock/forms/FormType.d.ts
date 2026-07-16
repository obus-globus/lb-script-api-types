import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { Form } from '../../../../net/lenni0451/mcstructs_bedrock/forms/Form.d.ts'
export class FormType extends Enum<FormType> {
    static ACTION: FormType;
    static CUSTOM: FormType;
    static MODAL: FormType;
    static byName(paramarg0: string): FormType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): FormType;
    static values(): FormType[];
    private constructor(arg2: Class<Form>, arg3: string)
    readonly type: Class<Form>;
    getName(): string;
    getType(): Class<Form>;
    name(): "MODAL" | "ACTION" | "CUSTOM";
}