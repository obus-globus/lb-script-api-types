import type { Function } from '../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BedrockTextFormatting } from '../../../../../net/lenni0451/mcstructs_bedrock/text/BedrockTextFormatting.d.ts'
import type { BedrockTextUtils$LegacyStyle } from '../../../../../net/lenni0451/mcstructs_bedrock/text/utils/BedrockTextUtils$LegacyStyle.d.ts'
export class BedrockTextUtils extends Object {
    static getStyleAt(paramarg0: string, paramarg1: number): BedrockTextUtils$LegacyStyle;
    static getStyleAt(paramarg0: string, paramarg1: number, paramarg2: (param0: string) => BedrockTextFormatting): BedrockTextUtils$LegacyStyle;
    static split(paramarg0: string, paramarg1: string): (Object | null)[];
    static split(paramarg0: string, paramarg1: string, paramarg2: (param0: string) => BedrockTextFormatting): (Object | null)[];
    constructor()
}