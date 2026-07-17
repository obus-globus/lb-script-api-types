import type { Mode } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { HotbarItemSlot } from '../../../../../../../../../../net/ccbluex/liquidbounce/utils/inventory/HotbarItemSlot.d.ts'
export class FlyFireball extends Mode {
    static Companion: Tagged$Companion;
    static INSTANCE: FlyFireball;
    readonly parent: ModeValueGroup<any>;
    getParent(): ModeValueGroup<any>;
    readonly slotResetDelay: { start: number; endInclusive: number; step: number };
    readonly technique: ModeValueGroup<Mode>;
    readonly trigger: ModeValueGroup<Mode>;
    wasTriggered: boolean;
    // private findFireballSlot(): HotbarItemSlot | null;
    throwFireball(): void;
}