import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class BonemealableBlock$Type extends Enum<BonemealableBlock$Type> {
    static GROWER: BonemealableBlock$Type;
    static NEIGHBOR_SPREADER: BonemealableBlock$Type;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): BonemealableBlock$Type;
    static values(): BonemealableBlock$Type[];
    private constructor()
    name(): "NEIGHBOR_SPREADER" | "GROWER";
}