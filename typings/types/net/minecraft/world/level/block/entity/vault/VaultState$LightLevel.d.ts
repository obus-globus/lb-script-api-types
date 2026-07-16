import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class VaultState$LightLevel extends Enum<VaultState$LightLevel> {
    static HALF_LIT: VaultState$LightLevel;
    static LIT: VaultState$LightLevel;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): VaultState$LightLevel;
    static values(): VaultState$LightLevel[];
    private constructor(value: number)
    // private value: number;
    name(): "HALF_LIT" | "LIT";
}