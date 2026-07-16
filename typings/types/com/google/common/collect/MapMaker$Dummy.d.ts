import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class MapMaker$Dummy extends Enum<MapMaker$Dummy> {
    static VALUE: MapMaker$Dummy;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): MapMaker$Dummy;
    static values(): MapMaker$Dummy[];
    private constructor()
    name(): "VALUE";
}