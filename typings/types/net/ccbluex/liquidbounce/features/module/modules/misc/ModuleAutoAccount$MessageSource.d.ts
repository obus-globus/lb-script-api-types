import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class ModuleAutoAccount$MessageSource extends Enum<ModuleAutoAccount$MessageSource> implements Tagged {
    static CHAT: ModuleAutoAccount$MessageSource;
    static Companion: Tagged$Companion;
    static SUBTITLE: ModuleAutoAccount$MessageSource;
    static TITLE: ModuleAutoAccount$MessageSource;
    static getEntries(): ModuleAutoAccount$MessageSource[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): ModuleAutoAccount$MessageSource;
    static values(): ModuleAutoAccount$MessageSource[];
    private constructor(tag: string)
    readonly tag: string;
    name(): "CHAT" | "TITLE" | "SUBTITLE";
}