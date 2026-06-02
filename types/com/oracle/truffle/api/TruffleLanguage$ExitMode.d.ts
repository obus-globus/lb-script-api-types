import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class TruffleLanguage$ExitMode extends Enum<TruffleLanguage$ExitMode> {
    static HARD: TruffleLanguage$ExitMode;
    static NATURAL: TruffleLanguage$ExitMode;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): TruffleLanguage$ExitMode;
    static values(): (Object | null)[];
    private constructor()
    name(): "NATURAL" | "HARD";
}