import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BedrockComponent } from '../../../../../net/lenni0451/mcstructs_bedrock/text/BedrockComponent.d.ts'
export class TranslationBedrockComponent extends BedrockComponent {
    constructor(arg0: string, ...arg1: Object[])
    constructor(arg0: string, arg1: Object[])
    readonly args: Object[];
    readonly key: string;
    readonly translator: (param0: string) => string;
    asString(): string;
    copy(): BedrockComponent;
    equals(arg0: Object | null): boolean;
    getArgs(): Object[];
    getKey(): string;
    hashCode(): number;
    setTranslator(arg0: (param0: string) => string): void;
    toString(): string;
}