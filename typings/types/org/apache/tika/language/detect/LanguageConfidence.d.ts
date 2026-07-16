import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class LanguageConfidence extends Enum<LanguageConfidence> {
    static HIGH: LanguageConfidence;
    static LOW: LanguageConfidence;
    static MEDIUM: LanguageConfidence;
    static NONE: LanguageConfidence;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): LanguageConfidence;
    static values(): LanguageConfidence[];
    private constructor()
    name(): "HIGH" | "MEDIUM" | "LOW" | "NONE";
}