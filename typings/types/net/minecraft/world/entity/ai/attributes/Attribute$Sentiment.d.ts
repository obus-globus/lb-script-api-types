import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { ChatFormatting } from '../../../../../../net/minecraft/ChatFormatting.d.ts'
export class Attribute$Sentiment extends Enum<Attribute$Sentiment> {
    static NEGATIVE: Attribute$Sentiment;
    static NEUTRAL: Attribute$Sentiment;
    static POSITIVE: Attribute$Sentiment;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): Attribute$Sentiment;
    static values(): Attribute$Sentiment[];
    private constructor()
    getStyle(valueIncrease: boolean): ChatFormatting;
    name(): "POSITIVE" | "NEUTRAL" | "NEGATIVE";
}