import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class PluginHandle$CompatibilityMode extends Enum<PluginHandle$CompatibilityMode> {
    static COMPATIBLE: PluginHandle$CompatibilityMode;
    static FAILED: PluginHandle$CompatibilityMode;
    static NORMAL: PluginHandle$CompatibilityMode;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): PluginHandle$CompatibilityMode;
    static values(): PluginHandle$CompatibilityMode[];
    private constructor()
    name(): "NORMAL" | "COMPATIBLE" | "FAILED";
}