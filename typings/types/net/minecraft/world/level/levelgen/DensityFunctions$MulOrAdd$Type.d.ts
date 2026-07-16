import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class DensityFunctions$MulOrAdd$Type extends Enum<DensityFunctions$MulOrAdd$Type> {
    static ADD: DensityFunctions$MulOrAdd$Type;
    static MUL: DensityFunctions$MulOrAdd$Type;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): DensityFunctions$MulOrAdd$Type;
    static values(): DensityFunctions$MulOrAdd$Type[];
    private constructor()
    name(): "MUL" | "ADD";
}