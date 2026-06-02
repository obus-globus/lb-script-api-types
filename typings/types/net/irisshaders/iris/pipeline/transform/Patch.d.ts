import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class Patch extends Enum<Patch> {
    static COMPOSITE: Patch;
    static COMPUTE: Patch;
    static DH_GENERIC: Patch;
    static DH_TERRAIN: Patch;
    static SODIUM: Patch;
    static VANILLA: Patch;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Patch;
    static values(): (Object | null)[];
    private constructor()
    name(): "VANILLA" | "DH_TERRAIN" | "DH_GENERIC" | "SODIUM" | "COMPOSITE" | "COMPUTE";
}