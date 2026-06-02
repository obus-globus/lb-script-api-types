import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Function1 } from '../../../../../../../kotlin/jvm/functions/Function1.d.ts'
import type { Tagged } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
export class ModuleAntiAFK$RandomInteraction$Interaction extends Enum<ModuleAntiAFK$RandomInteraction$Interaction> implements Tagged {
    static CHANGE_SLOT: ModuleAntiAFK$RandomInteraction$Interaction;
    static Companion: Tagged$Companion;
    static JUMP: ModuleAntiAFK$RandomInteraction$Interaction;
    static PITCH: ModuleAntiAFK$RandomInteraction$Interaction;
    static RANDOM_DIRECTION: ModuleAntiAFK$RandomInteraction$Interaction;
    static SWING_HAND: ModuleAntiAFK$RandomInteraction$Interaction;
    static YAW: ModuleAntiAFK$RandomInteraction$Interaction;
    static getEntries(): ModuleAntiAFK$RandomInteraction$Interaction[];
    static makeLookupTable(paramarg0: (Object | null)[]): { [key: string]: Object | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ModuleAntiAFK$RandomInteraction$Interaction;
    static values(): (Object | null)[];
    private constructor(tag: string, perform: Function1<Object, Object>)
    readonly perform: () => void;
    readonly tag: string;
    name(): "JUMP" | "SWING_HAND" | "CHANGE_SLOT" | "YAW" | "PITCH" | "RANDOM_DIRECTION";
}