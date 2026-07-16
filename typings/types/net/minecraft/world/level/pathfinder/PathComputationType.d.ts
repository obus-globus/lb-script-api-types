import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class PathComputationType extends Enum<PathComputationType> {
    static AIR: PathComputationType;
    static LAND: PathComputationType;
    static WATER: PathComputationType;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): PathComputationType;
    static values(): PathComputationType[];
    private constructor()
    name(): "LAND" | "WATER" | "AIR";
}