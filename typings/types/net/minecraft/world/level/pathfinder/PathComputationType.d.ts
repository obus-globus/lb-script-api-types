import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class PathComputationType extends Enum<PathComputationType> {
    static AIR: PathComputationType;
    static LAND: PathComputationType;
    static WATER: PathComputationType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): PathComputationType;
    static values(): PathComputationType[];
    private constructor()
    name(): "LAND" | "WATER" | "AIR";
}