import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BedrockComponent } from '../../../../../net/lenni0451/mcstructs_bedrock/text/BedrockComponent.d.ts'
export class ScoreBedrockComponent extends BedrockComponent {
    constructor(arg0: string, arg1: string)
    readonly name: string;
    readonly objective: string;
    asString(): string;
    copy(): BedrockComponent;
    equals(arg0: Object | null): boolean;
    getName(): string;
    getObjective(): string;
    hashCode(): number;
    toString(): string;
}