import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class BonemealableBlock$Type extends Enum<BonemealableBlock$Type> {
    static GROWER: BonemealableBlock$Type;
    static NEIGHBOR_SPREADER: BonemealableBlock$Type;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): BonemealableBlock$Type;
    static values(): BonemealableBlock$Type[];
    private constructor()
    name(): "NEIGHBOR_SPREADER" | "GROWER";
}