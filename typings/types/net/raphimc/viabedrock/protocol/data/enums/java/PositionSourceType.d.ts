import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class PositionSourceType extends Enum<PositionSourceType> {
    static BLOCK: PositionSourceType;
    static ENTITY: PositionSourceType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): PositionSourceType;
    static values(): PositionSourceType[];
    private constructor()
    name(): "BLOCK" | "ENTITY";
}