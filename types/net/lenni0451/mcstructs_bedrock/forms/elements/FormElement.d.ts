import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { FormElementType } from '../../../../../net/lenni0451/mcstructs_bedrock/forms/elements/FormElementType.d.ts'
export abstract class FormElement extends Object {
    constructor(arg0: FormElementType, arg1: string)
    readonly text: string;
    translator: (param0: string) => string;
    readonly type: FormElementType;
    getText(): string;
    getText(arg0: boolean): string;
    getTranslator(): (param0: string) => string;
    getType(): FormElementType;
    setTranslator(arg0: (param0: string) => string): void;
}