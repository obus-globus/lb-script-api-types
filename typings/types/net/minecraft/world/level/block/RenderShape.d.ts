import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class RenderShape extends Enum<RenderShape> {
    static INVISIBLE: RenderShape;
    static MODEL: RenderShape;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): RenderShape;
    static values(): RenderShape[];
    private constructor()
    name(): "INVISIBLE" | "MODEL";
}