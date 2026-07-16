import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
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
    static makeLookupTable<T extends Tagged>(self: T[]): { [key: string]: T };
    static of(self: string): Tagged;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): ModuleAntiAFK$RandomInteraction$Interaction;
    static values(): ModuleAntiAFK$RandomInteraction$Interaction[];
    private constructor(tag: string, perform: () => void)
    readonly perform: () => void;
    readonly tag: string;
    name(): "JUMP" | "SWING_HAND" | "CHANGE_SLOT" | "YAW" | "PITCH" | "RANDOM_DIRECTION";
}