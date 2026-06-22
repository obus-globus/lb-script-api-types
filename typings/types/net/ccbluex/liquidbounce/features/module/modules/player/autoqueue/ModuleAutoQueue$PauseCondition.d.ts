import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { BooleanSupplier } from '../../../../../../../../java/util/function/BooleanSupplier.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class ModuleAutoQueue$PauseCondition extends Enum<ModuleAutoQueue$PauseCondition> implements BooleanSupplier, Tagged {
    static CHAT_SCREEN_OPEN: ModuleAutoQueue$PauseCondition;
    static CLICK_GUI_OPEN: ModuleAutoQueue$PauseCondition;
    static CONTAINER_SCREEN_OPEN: ModuleAutoQueue$PauseCondition;
    static Companion: Tagged$Companion;
    static PAUSE_SCREEN_OPEN: ModuleAutoQueue$PauseCondition;
    static getEntries(): ModuleAutoQueue$PauseCondition[];
    static makeLookupTable(paramarg0: (Tagged | null)[]): { [key: string]: Tagged | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ModuleAutoQueue$PauseCondition;
    static values(): (Object | null)[];
    private constructor(tag: string)
    readonly tag: string;
    getAsBoolean(): boolean;
    name(): "CLICK_GUI_OPEN" | "CHAT_SCREEN_OPEN" | "CONTAINER_SCREEN_OPEN" | "PAUSE_SCREEN_OPEN";
}