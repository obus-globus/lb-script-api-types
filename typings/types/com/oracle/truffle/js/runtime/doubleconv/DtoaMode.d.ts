import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class DtoaMode extends Enum<DtoaMode> {
    static FIXED: DtoaMode;
    static PRECISION: DtoaMode;
    static SHORTEST: DtoaMode;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): DtoaMode;
    static values(): (Object | null)[];
    private constructor()
    name(): "SHORTEST" | "FIXED" | "PRECISION";
}