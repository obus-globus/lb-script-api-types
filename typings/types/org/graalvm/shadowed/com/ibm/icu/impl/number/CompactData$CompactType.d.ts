import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class CompactData$CompactType extends Enum<CompactData$CompactType> {
    static CURRENCY: CompactData$CompactType;
    static DECIMAL: CompactData$CompactType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): CompactData$CompactType;
    static values(): CompactData$CompactType[];
    private constructor()
    name(): "DECIMAL" | "CURRENCY";
}