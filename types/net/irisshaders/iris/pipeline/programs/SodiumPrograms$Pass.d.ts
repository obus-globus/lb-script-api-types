import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { ProgramId } from '../../../../../net/irisshaders/iris/shaderpack/loading/ProgramId.d.ts'
export class SodiumPrograms$Pass extends Enum<SodiumPrograms$Pass> {
    static SHADOW: SodiumPrograms$Pass;
    static SHADOW_CUTOUT: SodiumPrograms$Pass;
    static SHADOW_TRANS: SodiumPrograms$Pass;
    static TERRAIN: SodiumPrograms$Pass;
    static TERRAIN_CUTOUT: SodiumPrograms$Pass;
    static TRANSLUCENT: SodiumPrograms$Pass;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): SodiumPrograms$Pass;
    static values(): (Object | null)[];
    private constructor(arg2: ProgramId)
    readonly originalId: ProgramId;
    getOriginalId(): ProgramId;
    name(): "SHADOW" | "SHADOW_CUTOUT" | "SHADOW_TRANS" | "TERRAIN" | "TERRAIN_CUTOUT" | "TRANSLUCENT";
}