import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { Level } from '../../../../../org/spongepowered/asm/logging/Level.d.ts'
export class IMixinErrorHandler$ErrorAction extends Enum<IMixinErrorHandler$ErrorAction> {
    static ERROR: IMixinErrorHandler$ErrorAction;
    static NONE: IMixinErrorHandler$ErrorAction;
    static WARN: IMixinErrorHandler$ErrorAction;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): IMixinErrorHandler$ErrorAction;
    static values(): (Object | null)[];
    private constructor(arg2: Level)
    logLevel: Level;
    name(): "NONE" | "WARN" | "ERROR";
}