import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class CheckScreenTitleValueGroup$ContainerTitle extends Enum<CheckScreenTitleValueGroup$ContainerTitle> implements Tagged {
    static BARREL: CheckScreenTitleValueGroup$ContainerTitle;
    static BEACON: CheckScreenTitleValueGroup$ContainerTitle;
    static BLAST_FURNACE: CheckScreenTitleValueGroup$ContainerTitle;
    static BREWING_STAND: CheckScreenTitleValueGroup$ContainerTitle;
    static CHEST: CheckScreenTitleValueGroup$ContainerTitle;
    static CHEST_BOAT: CheckScreenTitleValueGroup$ContainerTitle;
    static CHEST_MINECART: CheckScreenTitleValueGroup$ContainerTitle;
    static Companion: Tagged$Companion;
    static DISPENSER: CheckScreenTitleValueGroup$ContainerTitle;
    static DROPPER: CheckScreenTitleValueGroup$ContainerTitle;
    static ENDER_CHEST: CheckScreenTitleValueGroup$ContainerTitle;
    static FURNACE: CheckScreenTitleValueGroup$ContainerTitle;
    static HOPPER: CheckScreenTitleValueGroup$ContainerTitle;
    static HOPPER_MINECART: CheckScreenTitleValueGroup$ContainerTitle;
    static LARGE_CHEST: CheckScreenTitleValueGroup$ContainerTitle;
    static SHULKER_BOX: CheckScreenTitleValueGroup$ContainerTitle;
    static SMOKER: CheckScreenTitleValueGroup$ContainerTitle;
    static getEntries(): CheckScreenTitleValueGroup$ContainerTitle[];
    static makeLookupTable(paramarg0: (Tagged | null)[]): { [key: string]: Tagged | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): CheckScreenTitleValueGroup$ContainerTitle;
    static values(): CheckScreenTitleValueGroup$ContainerTitle[];
    private constructor(tag: string, ...translatableKeys: string[])
    readonly tag: string;
    // private translatableKeys: string[];
    matches(title: string): boolean;
    name(): "BARREL" | "BEACON" | "BLAST_FURNACE" | "BREWING_STAND" | "CHEST" | "LARGE_CHEST" | "DISPENSER" | "DROPPER" | "ENDER_CHEST" | "FURNACE" | "HOPPER" | "SHULKER_BOX" | "SMOKER" | "CHEST_MINECART" | "CHEST_BOAT" | "HOPPER_MINECART";
}