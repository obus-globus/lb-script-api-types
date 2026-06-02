import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class MapRewritePolicy$Mode extends Enum<MapRewritePolicy$Mode> {
    static Add: MapRewritePolicy$Mode;
    static Update: MapRewritePolicy$Mode;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): MapRewritePolicy$Mode;
    static values(): (Object | null)[];
    private constructor()
    name(): "Add" | "Update";
}