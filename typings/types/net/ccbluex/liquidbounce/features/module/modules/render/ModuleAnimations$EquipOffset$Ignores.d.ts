import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class ModuleAnimations$EquipOffset$Ignores extends Enum<ModuleAnimations$EquipOffset$Ignores> implements Tagged {
    static AMOUNT: ModuleAnimations$EquipOffset$Ignores;
    static BLOCKING: ModuleAnimations$EquipOffset$Ignores;
    static Companion: Tagged$Companion;
    static PLACE: ModuleAnimations$EquipOffset$Ignores;
    static getEntries(): ModuleAnimations$EquipOffset$Ignores[];
    static makeLookupTable(paramarg0: (Tagged | null)[]): { [key: string]: Tagged | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ModuleAnimations$EquipOffset$Ignores;
    static values(): ModuleAnimations$EquipOffset$Ignores[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "BLOCKING" | "PLACE" | "AMOUNT";
}