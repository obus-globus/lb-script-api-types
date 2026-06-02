import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Form } from '../../../../../net/lenni0451/mcstructs_bedrock/forms/Form.d.ts'
import type { ModalFormBuilder } from '../../../../../net/lenni0451/mcstructs_bedrock/forms/types/builder/ModalFormBuilder.d.ts'
export class ModalForm extends Form {
    static DEFAULT_TRANSLATOR: (param0: string) => string;
    static builder(): ModalFormBuilder;
    constructor(arg0: string, arg1: string, arg2: string, arg3: string)
    readonly button1: string;
    readonly button2: string;
    readonly clickedButton: number;
    readonly text: string;
    deserializeResponse(arg0: string): void;
    getButton1(): string;
    getButton1(arg0: boolean): string;
    getButton2(): string;
    getButton2(arg0: boolean): string;
    getClickedButton(): number;
    getText(): string;
    getText(arg0: boolean): string;
    serializeResponse(): string;
    setClickedButton(arg0: number): void;
}