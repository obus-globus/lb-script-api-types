import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class HitResult$Type extends Enum<HitResult$Type> {
    static BLOCK: HitResult$Type;
    static ENTITY: HitResult$Type;
    static MISS: HitResult$Type;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): HitResult$Type;
    static values(): HitResult$Type[];
    private constructor()
    name(): "MISS" | "BLOCK" | "ENTITY";
}