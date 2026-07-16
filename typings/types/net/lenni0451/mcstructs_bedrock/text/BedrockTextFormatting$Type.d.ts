import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class BedrockTextFormatting$Type extends Enum<BedrockTextFormatting$Type> {
    static COLOR: BedrockTextFormatting$Type;
    static FORMATTING: BedrockTextFormatting$Type;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): BedrockTextFormatting$Type;
    static values(): BedrockTextFormatting$Type[];
    private constructor()
    name(): "COLOR" | "FORMATTING";
}