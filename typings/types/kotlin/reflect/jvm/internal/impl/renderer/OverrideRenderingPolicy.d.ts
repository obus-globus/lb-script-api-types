import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class OverrideRenderingPolicy extends Enum<OverrideRenderingPolicy> {
    static RENDER_OPEN: OverrideRenderingPolicy;
    static RENDER_OPEN_OVERRIDE: OverrideRenderingPolicy;
    static RENDER_OVERRIDE: OverrideRenderingPolicy;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): OverrideRenderingPolicy;
    static values(): OverrideRenderingPolicy[];
    private constructor()
    name(): "RENDER_OVERRIDE" | "RENDER_OPEN" | "RENDER_OPEN_OVERRIDE";
}