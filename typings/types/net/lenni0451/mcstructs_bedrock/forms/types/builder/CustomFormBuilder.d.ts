import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { FormElement } from '../../../../../../net/lenni0451/mcstructs_bedrock/forms/elements/FormElement.d.ts'
import type { CustomForm } from '../../../../../../net/lenni0451/mcstructs_bedrock/forms/types/CustomForm.d.ts'
export class CustomFormBuilder extends Object {
    constructor()
    // private elements: FormElement[];
    // private title: string;
    build(): CustomForm;
    checkbox(arg0: string): CustomFormBuilder;
    checkbox(arg0: string, arg1: boolean): CustomFormBuilder;
    divider(): CustomFormBuilder;
    dropdown(arg0: string, ...arg1: string[]): CustomFormBuilder;
    dropdown(arg0: string, arg1: number, ...arg2: string[]): CustomFormBuilder;
    header(arg0: string): CustomFormBuilder;
    label(arg0: string): CustomFormBuilder;
    slider(arg0: string, arg1: number, arg2: number, arg3: number): CustomFormBuilder;
    slider(arg0: string, arg1: number, arg2: number, arg3: number, arg4: number): CustomFormBuilder;
    stepSlider(arg0: string, ...arg1: string[]): CustomFormBuilder;
    stepSlider(arg0: string, arg1: number, ...arg2: string[]): CustomFormBuilder;
    textField(arg0: string, arg1: string): CustomFormBuilder;
    textField(arg0: string, arg1: string, arg2: string): CustomFormBuilder;
    title(arg0: string): CustomFormBuilder;
}