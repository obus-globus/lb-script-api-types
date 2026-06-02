import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class RenderResult$STATUS extends Enum<RenderResult$STATUS> {
    static EXCEPTION: RenderResult$STATUS;
    static SUCCESS: RenderResult$STATUS;
    static TIMEOUT: RenderResult$STATUS;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): RenderResult$STATUS;
    static values(): (Object | null)[];
    private constructor()
    name(): "SUCCESS" | "EXCEPTION" | "TIMEOUT";
}