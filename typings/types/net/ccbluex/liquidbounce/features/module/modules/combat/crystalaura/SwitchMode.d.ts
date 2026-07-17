import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class SwitchMode extends Enum<SwitchMode> implements Tagged {
    static Companion: Tagged$Companion;
    static NONE: SwitchMode;
    static NORMAL: SwitchMode;
    static SILENT: SwitchMode;
    static getEntries(): SwitchMode[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): SwitchMode;
    static values(): SwitchMode[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "SILENT" | "NORMAL" | "NONE";
}