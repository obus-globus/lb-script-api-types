import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class CosmeticCategory extends Enum<CosmeticCategory> {
    static CAPE: CosmeticCategory;
    static DEADMAU5_EARS: CosmeticCategory;
    static DINNERBONE: CosmeticCategory;
    static getEntries(): CosmeticCategory[];
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): CosmeticCategory;
    static values(): (Object | null)[];
    private constructor()
    name(): "CAPE" | "DEADMAU5_EARS" | "DINNERBONE";
}