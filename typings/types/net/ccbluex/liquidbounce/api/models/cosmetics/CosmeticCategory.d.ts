import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class CosmeticCategory extends Enum<CosmeticCategory> {
    static CAPE: CosmeticCategory;
    static DEADMAU5_EARS: CosmeticCategory;
    static DINNERBONE: CosmeticCategory;
    static getEntries(): CosmeticCategory[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): CosmeticCategory;
    static values(): CosmeticCategory[];
    private constructor()
    name(): "CAPE" | "DEADMAU5_EARS" | "DINNERBONE";
}