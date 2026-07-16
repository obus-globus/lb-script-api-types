import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class TruffleLanguage$ExitMode extends Enum<TruffleLanguage$ExitMode> {
    static HARD: TruffleLanguage$ExitMode;
    static NATURAL: TruffleLanguage$ExitMode;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): TruffleLanguage$ExitMode;
    static values(): TruffleLanguage$ExitMode[];
    private constructor()
    name(): "NATURAL" | "HARD";
}