import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FormElement } from '../../../../../../net/lenni0451/mcstructs_bedrock/forms/elements/FormElement.d.ts'
import type { FormImage } from '../../../../../../net/lenni0451/mcstructs_bedrock/forms/elements/FormImage.d.ts'
import type { ActionForm } from '../../../../../../net/lenni0451/mcstructs_bedrock/forms/types/ActionForm.d.ts'
export class ActionFormBuilder extends Object {
    constructor()
    // private elements: FormElement[];
    // private text: string;
    // private title: string;
    build(): ActionForm;
    button(arg0: string): ActionFormBuilder;
    button(arg0: string, arg1: FormImage): ActionFormBuilder;
    divider(): ActionFormBuilder;
    header(arg0: string): ActionFormBuilder;
    label(arg0: string): ActionFormBuilder;
    pathButton(arg0: string, arg1: string): ActionFormBuilder;
    text(arg0: string): ActionFormBuilder;
    title(arg0: string): ActionFormBuilder;
    urlButton(arg0: string, arg1: string): ActionFormBuilder;
}