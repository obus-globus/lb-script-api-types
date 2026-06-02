import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { ContainerItemSlot } from '../../../../../../../../net/ccbluex/liquidbounce/utils/inventory/ContainerItemSlot.d.ts'
export class ModuleChestStealer$SelectionMode extends Enum<ModuleChestStealer$SelectionMode> implements Tagged {
    static Companion: Tagged$Companion;
    static DISTANCE: ModuleChestStealer$SelectionMode;
    static INDEX: ModuleChestStealer$SelectionMode;
    static RANDOM: ModuleChestStealer$SelectionMode;
    static getEntries(): ModuleChestStealer$SelectionMode[];
    static makeLookupTable(paramarg0: (Object | null)[]): { [key: string]: Object | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ModuleChestStealer$SelectionMode;
    static values(): (Object | null)[];
    private constructor(tag: string)
    readonly tag: string;
    process(slots: ContainerItemSlot[]): void;
    name(): "DISTANCE" | "INDEX" | "RANDOM";
}