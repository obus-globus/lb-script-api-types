import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class VaultState$LightLevel extends Enum<VaultState$LightLevel> {
    static HALF_LIT: VaultState$LightLevel;
    static LIT: VaultState$LightLevel;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): VaultState$LightLevel;
    static values(): VaultState$LightLevel[];
    private constructor(value: number)
    // private value: number;
    name(): "HALF_LIT" | "LIT";
}