import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class DateUtils$ModifyType extends Enum<DateUtils$ModifyType> {
    static CEILING: DateUtils$ModifyType;
    static ROUND: DateUtils$ModifyType;
    static TRUNCATE: DateUtils$ModifyType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): DateUtils$ModifyType;
    static values(): DateUtils$ModifyType[];
    private constructor()
    name(): "TRUNCATE" | "ROUND" | "CEILING";
}