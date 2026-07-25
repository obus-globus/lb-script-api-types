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
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cf742eb17a33041e582f6f30822aab3e8450edf8/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/ModuleFastBreak.kt#L37 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/ModuleFastBreak.kt:37}
 */
export class ModuleFastBreak extends ClientModule {
    static INSTANCE: ModuleFastBreak;
    // private VANILLA_DESTROY_DELAY: number;
    // private breakDamage: number;
    // private /*not mapped: */ getBreakDamage(): number;
    // private modeChoice: ModeValueGroup<Mode>;
    // private onlyTool: boolean;
    // private /*not mapped: */ getOnlyTool(): boolean;
    readonly repeatable: EventHook<GameTickEvent>;
    onDisabled(): void;
}