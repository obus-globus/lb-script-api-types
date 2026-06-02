import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class OverrideRenderingPolicy extends Enum<OverrideRenderingPolicy> {
    static RENDER_OPEN: OverrideRenderingPolicy;
    static RENDER_OPEN_OVERRIDE: OverrideRenderingPolicy;
    static RENDER_OVERRIDE: OverrideRenderingPolicy;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): OverrideRenderingPolicy;
    static values(): (Object | null)[];
    private constructor()
    name(): "RENDER_OVERRIDE" | "RENDER_OPEN" | "RENDER_OPEN_OVERRIDE";
}