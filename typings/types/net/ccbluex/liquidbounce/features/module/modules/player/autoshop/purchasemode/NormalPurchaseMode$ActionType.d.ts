import type { Class } from '../../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { ContainerInput } from '../../../../../../../../../net/minecraft/world/inventory/ContainerInput.d.ts'
export class NormalPurchaseMode$ActionType extends Enum<NormalPurchaseMode$ActionType> implements Tagged {
    static Companion: Tagged$Companion;
    static PICK_UP: NormalPurchaseMode$ActionType;
    static THROW: NormalPurchaseMode$ActionType;
    static getEntries(): NormalPurchaseMode$ActionType[];
    static makeLookupTable(paramarg0: (Tagged | null)[]): { [key: string]: Tagged | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): NormalPurchaseMode$ActionType;
    static values(): (Object | null)[];
    private constructor(tag: string, input: ContainerInput)
    readonly input: ContainerInput;
    readonly tag: string;
    name(): "PICK_UP" | "THROW";
}