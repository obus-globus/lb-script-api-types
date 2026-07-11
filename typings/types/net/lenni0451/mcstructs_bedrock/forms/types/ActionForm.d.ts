import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Form } from '../../../../../net/lenni0451/mcstructs_bedrock/forms/Form.d.ts'
import type { FormElement } from '../../../../../net/lenni0451/mcstructs_bedrock/forms/elements/FormElement.d.ts'
import type { ActionFormBuilder } from '../../../../../net/lenni0451/mcstructs_bedrock/forms/types/builder/ActionFormBuilder.d.ts'
export class ActionForm extends Form {
    static DEFAULT_TRANSLATOR: (param0: string) => string;
    static builder(): ActionFormBuilder;
    constructor(arg0: string, arg1: string, ...arg2: FormElement[])
    readonly clickedButton: number;
    readonly elements: FormElement[];
    readonly text: string;
    deserializeResponse(arg0: string): void;
    getClickedButton(): number;
    getElements(): FormElement[];
    getText(): string;
    getText(arg0: boolean): string;
    serializeResponse(): string;
    setClickedButton(arg0: number): void;
}