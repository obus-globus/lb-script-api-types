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
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/ModuleFastBreak.kt#L32 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/ModuleFastBreak.kt:32}
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