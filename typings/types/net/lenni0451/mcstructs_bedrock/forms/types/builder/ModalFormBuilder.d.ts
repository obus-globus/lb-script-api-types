import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ModalForm } from '../../../../../../net/lenni0451/mcstructs_bedrock/forms/types/ModalForm.d.ts'
export class ModalFormBuilder extends Object {
    constructor()
    // private button1: string;
    // private button2: string;
    // private text: string;
    // private title: string;
    build(): ModalForm;
    button1(arg0: string): ModalFormBuilder;
    button2(arg0: string): ModalFormBuilder;
    buttons(arg0: string, arg1: string): ModalFormBuilder;
    text(arg0: string): ModalFormBuilder;
    title(arg0: string): ModalFormBuilder;
}