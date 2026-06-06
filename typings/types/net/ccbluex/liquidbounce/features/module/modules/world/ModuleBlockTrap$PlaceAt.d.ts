import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class ModuleBlockTrap$PlaceAt extends Enum<ModuleBlockTrap$PlaceAt> implements Tagged {
    static Companion: Tagged$Companion;
    /**
     * Allows placing crystals next to floor and keep them at the spot when disabled.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/ModuleBlockTrap.kt#L187 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/ModuleBlockTrap.kt:187}
     */
    static FLOOR: ModuleBlockTrap$PlaceAt;
    /**
     * Allows placing crystals next to their legs and keep them at the spot when disabled.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/ModuleBlockTrap.kt#L182 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/ModuleBlockTrap.kt:182}
     */
    static LEGS: ModuleBlockTrap$PlaceAt;
    static getEntries(): ModuleBlockTrap$PlaceAt[];
    static makeLookupTable(paramarg0: (Object | null)[]): { [key: string]: Object | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ModuleBlockTrap$PlaceAt;
    static values(): (Object | null)[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "LEGS" | "FLOOR";
}