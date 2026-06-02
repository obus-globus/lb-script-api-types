import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class VoidType extends Enum<VoidType> {
    static NULL: VoidType;
    static UNDEFINED: VoidType;
    static getEntries(): VoidType[];
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): VoidType;
    static values(): (Object | null)[];
    private constructor(jsTypeName: string)
    readonly jsTypeName: string;
    name(): "NULL" | "UNDEFINED";
}