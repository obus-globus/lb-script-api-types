import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FormType } from '../../../../net/lenni0451/mcstructs_bedrock/forms/FormType.d.ts'
export abstract class Form extends Object {
    static DEFAULT_TRANSLATOR: (param0: string) => string;
    constructor(arg0: FormType, arg1: string)
    readonly title: string;
    translator: (param0: string) => string;
    readonly type: FormType;
    deserializeResponse(arg0: string): void;
    getTitle(): string;
    getTitle(arg0: boolean): string;
    getTranslator(): (param0: string) => string;
    getType(): FormType;
    serializeResponse(): string;
    setTranslator(arg0: (param0: string) => string): void;
}