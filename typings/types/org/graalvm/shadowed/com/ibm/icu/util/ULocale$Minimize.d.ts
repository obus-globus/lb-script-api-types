import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class ULocale$Minimize extends Enum<ULocale$Minimize> {
    static FAVOR_REGION: ULocale$Minimize;
    static FAVOR_SCRIPT: ULocale$Minimize;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): ULocale$Minimize;
    static values(): ULocale$Minimize[];
    private constructor()
    name(): "FAVOR_SCRIPT" | "FAVOR_REGION";
}