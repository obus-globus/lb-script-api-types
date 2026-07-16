import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class MapRewritePolicy$Mode extends Enum<MapRewritePolicy$Mode> {
    static Add: MapRewritePolicy$Mode;
    static Update: MapRewritePolicy$Mode;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): MapRewritePolicy$Mode;
    static values(): MapRewritePolicy$Mode[];
    private constructor()
    name(): "Add" | "Update";
}