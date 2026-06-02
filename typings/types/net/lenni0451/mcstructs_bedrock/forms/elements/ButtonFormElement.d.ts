import type { FormElement } from '../../../../../net/lenni0451/mcstructs_bedrock/forms/elements/FormElement.d.ts'
import type { FormImage } from '../../../../../net/lenni0451/mcstructs_bedrock/forms/elements/FormImage.d.ts'
export class ButtonFormElement extends FormElement {
    constructor(arg0: string)
    constructor(arg0: string, arg1: FormImage)
    readonly image: FormImage;
    getImage(): FormImage;
}