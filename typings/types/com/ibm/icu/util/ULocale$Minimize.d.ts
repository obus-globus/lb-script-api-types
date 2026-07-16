import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class ULocale$Minimize extends Enum<ULocale$Minimize> {
    static FAVOR_REGION: ULocale$Minimize;
    static FAVOR_SCRIPT: ULocale$Minimize;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): ULocale$Minimize;
    static values(): ULocale$Minimize[];
    private constructor()
    name(): "FAVOR_SCRIPT" | "FAVOR_REGION";
}