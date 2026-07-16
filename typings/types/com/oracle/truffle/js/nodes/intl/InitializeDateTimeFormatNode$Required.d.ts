import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class InitializeDateTimeFormatNode$Required extends Enum<InitializeDateTimeFormatNode$Required> {
    static ANY: InitializeDateTimeFormatNode$Required;
    static DATE: InitializeDateTimeFormatNode$Required;
    static TIME: InitializeDateTimeFormatNode$Required;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): InitializeDateTimeFormatNode$Required;
    static values(): InitializeDateTimeFormatNode$Required[];
    private constructor()
    name(): "DATE" | "TIME" | "ANY";
}