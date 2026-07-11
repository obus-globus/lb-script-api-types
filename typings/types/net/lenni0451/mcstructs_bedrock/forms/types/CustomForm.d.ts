import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Form } from '../../../../../net/lenni0451/mcstructs_bedrock/forms/Form.d.ts'
import type { FormElement } from '../../../../../net/lenni0451/mcstructs_bedrock/forms/elements/FormElement.d.ts'
import type { CustomFormBuilder } from '../../../../../net/lenni0451/mcstructs_bedrock/forms/types/builder/CustomFormBuilder.d.ts'
export class CustomForm extends Form {
    static DEFAULT_TRANSLATOR: (param0: string) => string;
    static builder(): CustomFormBuilder;
    constructor(arg0: string, ...arg1: FormElement[])
    readonly elements: FormElement[];
    deserializeResponse(arg0: string): void;
    getElements(): FormElement[];
    serializeResponse(): string;
    setTranslator(arg0: (param0: string) => string): void;
}