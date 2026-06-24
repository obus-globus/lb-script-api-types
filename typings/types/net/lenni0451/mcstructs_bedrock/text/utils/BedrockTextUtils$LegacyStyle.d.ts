import type { BedrockTextUtils$1 } from '../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BedrockTextFormatting } from '../../../../../net/lenni0451/mcstructs_bedrock/text/BedrockTextFormatting.d.ts'
export class BedrockTextUtils$LegacyStyle extends Object {
    private constructor()
    constructor(arg0: BedrockTextUtils$1)
    readonly color: BedrockTextFormatting;
    readonly styles: BedrockTextFormatting[];
    equals(arg0: Object | null): boolean;
    getColor(): BedrockTextFormatting;
    getStyles(): BedrockTextFormatting[];
    hashCode(): number;
    setColor(arg0: BedrockTextFormatting): void;
    toLegacy(): string;
    toString(): string;
}