import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class MapMessageJsonFormatter extends Enum<MapMessageJsonFormatter> {
    static MAX_DEPTH: number;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): MapMessageJsonFormatter;
    static values(): MapMessageJsonFormatter[];
    private constructor()
}