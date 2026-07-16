import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class InitializeDateTimeFormatNode$Defaults extends Enum<InitializeDateTimeFormatNode$Defaults> {
    static ALL: InitializeDateTimeFormatNode$Defaults;
    static DATE: InitializeDateTimeFormatNode$Defaults;
    static TIME: InitializeDateTimeFormatNode$Defaults;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): InitializeDateTimeFormatNode$Defaults;
    static values(): InitializeDateTimeFormatNode$Defaults[];
    private constructor()
    name(): "DATE" | "TIME" | "ALL";
}