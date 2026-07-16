import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class TinyRemapper$Direction extends Enum<TinyRemapper$Direction> {
    static ANY: TinyRemapper$Direction;
    static DOWN: TinyRemapper$Direction;
    static UP: TinyRemapper$Direction;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): TinyRemapper$Direction;
    static values(): TinyRemapper$Direction[];
    private constructor()
    name(): "ANY" | "UP" | "DOWN";
}