import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class Nls$Capitalization extends Enum<Nls$Capitalization> {
    static NotSpecified: Nls$Capitalization;
    static Sentence: Nls$Capitalization;
    static Title: Nls$Capitalization;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): Nls$Capitalization;
    static values(): Nls$Capitalization[];
    private constructor()
    name(): "NotSpecified" | "Title" | "Sentence";
}