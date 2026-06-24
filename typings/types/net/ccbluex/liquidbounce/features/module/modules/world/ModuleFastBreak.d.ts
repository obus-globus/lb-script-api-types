import type { Mode } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
/**
 * FastBreak module
 *
 * Allows you to break blocks faster.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/ModuleFastBreak.kt#L32 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/ModuleFastBreak.kt:32}
 */
export class ModuleFastBreak extends ClientModule {
    static INSTANCE: ModuleFastBreak;
    // private breakDamage: number;
    // private /*not mapped: */ getBreakDamage(): number;
    // private modeChoice: ModeValueGroup<Mode>;
    // private onlyTool: boolean;
    // private /*not mapped: */ getOnlyTool(): boolean;
    readonly repeatable: EventHook<GameTickEvent>;
}