import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class Workarounds$Reference extends Enum<Workarounds$Reference> {
    static AMD_GAME_OPTIMIZATION_BROKEN: Workarounds$Reference;
    static INTEL_DEPTH_BUFFER_COMPARISON_UNRELIABLE: Workarounds$Reference;
    static INTEL_FRAMEBUFFER_BLIT_CRASH_WHEN_UNFOCUSED: Workarounds$Reference;
    static NO_ERROR_CONTEXT_UNSUPPORTED: Workarounds$Reference;
    static NVIDIA_THREADED_OPTIMIZATIONS_BROKEN: Workarounds$Reference;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): Workarounds$Reference;
    static values(): Workarounds$Reference[];
    private constructor()
    name(): "NVIDIA_THREADED_OPTIMIZATIONS_BROKEN" | "NO_ERROR_CONTEXT_UNSUPPORTED" | "INTEL_FRAMEBUFFER_BLIT_CRASH_WHEN_UNFOCUSED" | "INTEL_DEPTH_BUFFER_COMPARISON_UNRELIABLE" | "AMD_GAME_OPTIMIZATION_BROKEN";
}