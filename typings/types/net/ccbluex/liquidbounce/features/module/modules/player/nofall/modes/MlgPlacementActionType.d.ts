import type { Class } from '../../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../../java/lang/Enum.d.ts'
export class MlgPlacementActionType extends Enum<MlgPlacementActionType> {
    static MLG: MlgPlacementActionType;
    static PICKUP_WATER: MlgPlacementActionType;
    static SCAFFOLDING: MlgPlacementActionType;
    static getEntries(): MlgPlacementActionType[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): MlgPlacementActionType;
    static values(): MlgPlacementActionType[];
    private constructor()
    name(): "MLG" | "SCAFFOLDING" | "PICKUP_WATER";
}