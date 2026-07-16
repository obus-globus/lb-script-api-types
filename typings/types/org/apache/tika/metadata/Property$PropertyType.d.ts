import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class Property$PropertyType extends Enum<Property$PropertyType> {
    static ALT: Property$PropertyType;
    static BAG: Property$PropertyType;
    static COMPOSITE: Property$PropertyType;
    static SEQ: Property$PropertyType;
    static SIMPLE: Property$PropertyType;
    static STRUCTURE: Property$PropertyType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Property$PropertyType;
    static values(): Property$PropertyType[];
    private constructor()
    name(): "SIMPLE" | "STRUCTURE" | "BAG" | "SEQ" | "ALT" | "COMPOSITE";
}