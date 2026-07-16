import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class RenderResult$STATUS extends Enum<RenderResult$STATUS> {
    static EXCEPTION: RenderResult$STATUS;
    static SUCCESS: RenderResult$STATUS;
    static TIMEOUT: RenderResult$STATUS;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): RenderResult$STATUS;
    static values(): RenderResult$STATUS[];
    private constructor()
    name(): "SUCCESS" | "EXCEPTION" | "TIMEOUT";
}