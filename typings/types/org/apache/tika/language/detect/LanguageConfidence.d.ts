import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class LanguageConfidence extends Enum<LanguageConfidence> {
    static HIGH: LanguageConfidence;
    static LOW: LanguageConfidence;
    static MEDIUM: LanguageConfidence;
    static NONE: LanguageConfidence;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): LanguageConfidence;
    static values(): (Object | null)[];
    private constructor()
    name(): "HIGH" | "MEDIUM" | "LOW" | "NONE";
}