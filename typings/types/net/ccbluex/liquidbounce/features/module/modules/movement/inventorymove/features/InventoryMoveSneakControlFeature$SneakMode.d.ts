import type { Class } from '../../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class InventoryMoveSneakControlFeature$SneakMode extends Enum<InventoryMoveSneakControlFeature$SneakMode> implements Tagged {
    static Companion: Tagged$Companion;
    static DO_NOT_CHANGE: InventoryMoveSneakControlFeature$SneakMode;
    static FORCE_NO_SNEAK: InventoryMoveSneakControlFeature$SneakMode;
    static FORCE_SNEAK: InventoryMoveSneakControlFeature$SneakMode;
    static getEntries(): InventoryMoveSneakControlFeature$SneakMode[];
    static makeLookupTable<T extends Tagged>(self: T[]): { [key: string]: T };
    static of(self: string): Tagged;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): InventoryMoveSneakControlFeature$SneakMode;
    static values(): InventoryMoveSneakControlFeature$SneakMode[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "DO_NOT_CHANGE" | "FORCE_SNEAK" | "FORCE_NO_SNEAK";
}