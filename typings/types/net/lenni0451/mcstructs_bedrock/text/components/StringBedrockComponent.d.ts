import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BedrockComponent } from '../../../../../net/lenni0451/mcstructs_bedrock/text/BedrockComponent.d.ts'
export class StringBedrockComponent extends BedrockComponent {
    constructor(arg0: string)
    readonly text: string;
    asString(): string;
    copy(): BedrockComponent;
    equals(arg0: Object | null): boolean;
    getText(): string;
    hashCode(): number;
    toString(): string;
}