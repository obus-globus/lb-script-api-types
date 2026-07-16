import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class BidiTransform$Mirroring extends Enum<BidiTransform$Mirroring> {
    static OFF: BidiTransform$Mirroring;
    static ON: BidiTransform$Mirroring;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): BidiTransform$Mirroring;
    static values(): BidiTransform$Mirroring[];
    private constructor()
    name(): "OFF" | "ON";
}