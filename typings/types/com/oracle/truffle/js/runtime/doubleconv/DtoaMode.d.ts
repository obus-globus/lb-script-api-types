import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class DtoaMode extends Enum<DtoaMode> {
    static FIXED: DtoaMode;
    static PRECISION: DtoaMode;
    static SHORTEST: DtoaMode;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): DtoaMode;
    static values(): DtoaMode[];
    private constructor()
    name(): "SHORTEST" | "FIXED" | "PRECISION";
}