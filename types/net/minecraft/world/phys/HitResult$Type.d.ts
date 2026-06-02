import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class HitResult$Type extends Enum<HitResult$Type> {
    static BLOCK: HitResult$Type;
    static ENTITY: HitResult$Type;
    static MISS: HitResult$Type;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): HitResult$Type;
    static values(): (Object | null)[];
    private constructor()
    name(): "MISS" | "BLOCK" | "ENTITY";
}