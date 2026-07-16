import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class TypeUtils$Equivalency extends Enum<TypeUtils$Equivalency> {
    static BOUNDS_MISMATCH: TypeUtils$Equivalency;
    static EQUIVALENT: TypeUtils$Equivalency;
    static EQUIVALENT_BUT_RAW: TypeUtils$Equivalency;
    static NOT_EQUIVALENT: TypeUtils$Equivalency;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): TypeUtils$Equivalency;
    static values(): TypeUtils$Equivalency[];
    private constructor()
    name(): "NOT_EQUIVALENT" | "EQUIVALENT_BUT_RAW" | "BOUNDS_MISMATCH" | "EQUIVALENT";
}