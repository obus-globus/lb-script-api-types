import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FormImage$Type } from '../../../../../net/lenni0451/mcstructs_bedrock/forms/elements/FormImage$Type.d.ts'
export class FormImage extends Object {
    constructor(arg0: FormImage$Type, arg1: string)
    readonly type: FormImage$Type;
    readonly value: string;
    getType(): FormImage$Type;
    getValue(): string;
}