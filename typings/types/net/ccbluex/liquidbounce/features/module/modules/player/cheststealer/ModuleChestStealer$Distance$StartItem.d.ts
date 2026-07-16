import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { ContainerItemSlot } from '../../../../../../../../net/ccbluex/liquidbounce/utils/inventory/ContainerItemSlot.d.ts'
export class ModuleChestStealer$Distance$StartItem extends Enum<ModuleChestStealer$Distance$StartItem> implements Tagged {
    static Companion: Tagged$Companion;
    static DEFAULT: ModuleChestStealer$Distance$StartItem;
    static MAX_SLOT: ModuleChestStealer$Distance$StartItem;
    static MIN_SLOT: ModuleChestStealer$Distance$StartItem;
    static RANDOM: ModuleChestStealer$Distance$StartItem;
    static getEntries(): ModuleChestStealer$Distance$StartItem[];
    static makeLookupTable<T extends Tagged>(self: T[]): { [key: string]: T };
    static of(self: string): Tagged;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): ModuleChestStealer$Distance$StartItem;
    static values(): ModuleChestStealer$Distance$StartItem[];
    private constructor(tag: string)
    readonly tag: string;
    getStartIndex(slots: ContainerItemSlot[]): number;
    name(): "DEFAULT" | "RANDOM" | "MAX_SLOT" | "MIN_SLOT";
}