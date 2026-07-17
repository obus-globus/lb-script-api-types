import type { Class } from '../../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { ContainerInput } from '../../../../../../../../../net/minecraft/world/inventory/ContainerInput.d.ts'
export class NormalPurchaseMode$ActionType extends Enum<NormalPurchaseMode$ActionType> implements Tagged {
    static Companion: Tagged$Companion;
    static PICK_UP: NormalPurchaseMode$ActionType;
    static THROW: NormalPurchaseMode$ActionType;
    static getEntries(): NormalPurchaseMode$ActionType[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): NormalPurchaseMode$ActionType;
    static values(): NormalPurchaseMode$ActionType[];
    private constructor(tag: string, input: ContainerInput)
    readonly input: ContainerInput;
    readonly tag: string;
    name(): "PICK_UP" | "THROW";
}