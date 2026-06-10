import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { HotbarItemSlot } from '../../../../../../../../net/ccbluex/liquidbounce/utils/inventory/HotbarItemSlot.d.ts'
export class AutoFirework$FireworkUseMode extends Enum<AutoFirework$FireworkUseMode> implements Tagged {
    static Companion: Tagged$Companion;
    static NORMAL: AutoFirework$FireworkUseMode;
    static PACKET: AutoFirework$FireworkUseMode;
    static getEntries(): AutoFirework$FireworkUseMode[];
    static makeLookupTable(paramarg0: (Tagged | null)[]): { [key: string]: Tagged | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): AutoFirework$FireworkUseMode;
    static values(): (Object | null)[];
    private constructor(tag: string)
    readonly tag: string;
    useFireworkSlot(slot: HotbarItemSlot, resetDelay: number): void;
    name(): "NORMAL" | "PACKET";
}