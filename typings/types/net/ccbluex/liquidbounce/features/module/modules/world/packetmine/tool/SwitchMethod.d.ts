import type { Class } from '../../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { MinecraftShortcuts } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/MinecraftShortcuts.d.ts'
import type { MineTarget } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/world/packetmine/MineTarget.d.ts'
import type { HotbarItemSlot } from '../../../../../../../../../net/ccbluex/liquidbounce/utils/inventory/HotbarItemSlot.d.ts'
export class SwitchMethod extends Enum<SwitchMethod> implements Tagged, MinecraftShortcuts {
    static Companion: Tagged$Companion;
    static NORMAL: SwitchMethod;
    /**
     * Only works before 1.21.3.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/packetmine/tool/SwitchMethod.kt#L85 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/packetmine/tool/SwitchMethod.kt:85}
     */
    static PICK: SwitchMethod;
    static SWAP: SwitchMethod;
    static getEntries(): SwitchMethod[];
    static makeLookupTable(paramarg0: (Tagged | null)[]): { [key: string]: Tagged | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): SwitchMethod;
    static values(): (Object | null)[];
    private constructor(tag: string, shouldSync: boolean)
    exchanged: number | null;
    readonly shouldSync: boolean;
    readonly tag: string;
    reset(): void;
    switch(slot: HotbarItemSlot, mineTarget: MineTarget): void;
    switchBack(): void;
    name(): "NORMAL" | "SWAP" | "PICK";
}