import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { TriState } from '../../../../../../../net/minecraft/util/TriState.d.ts'
export class AmbientOcclusionMode extends Enum<AmbientOcclusionMode> {
    static DEFAULT: AmbientOcclusionMode;
    static DISABLED: AmbientOcclusionMode;
    static ENABLED: AmbientOcclusionMode;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): AmbientOcclusionMode;
    static values(): AmbientOcclusionMode[];
    private constructor()
    toTriState(): TriState;
    name(): "ENABLED" | "DEFAULT" | "DISABLED";
}