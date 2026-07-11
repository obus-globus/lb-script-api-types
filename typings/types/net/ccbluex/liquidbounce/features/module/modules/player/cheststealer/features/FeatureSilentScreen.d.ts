import type { ToggleableValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { EventHook } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { PacketEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
import type { ScreenEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/ScreenEvent.d.ts'
import type { BlockPos } from '../../../../../../../../../net/minecraft/core/BlockPos.d.ts'
/**
 * @see net.ccbluex.liquidbounce.injection.mixins.minecraft.client.MixinMinecraft
 * @see net.ccbluex.liquidbounce.injection.mixins.minecraft.gui.MixinAbstractContainerScreen
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/2f6d19f3612ad2b226f28cf69d3c1606d4c2e8fa/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/cheststealer/features/FeatureSilentScreen.kt#L48 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/cheststealer/features/FeatureSilentScreen.kt:48}
 */
export class FeatureSilentScreen extends ToggleableValueGroup {
    static INSTANCE: FeatureSilentScreen;
    // private drawInventoryTag: ToggleableValueGroup;
    // private lastInteractedBlock: BlockPos | null;
    // private packetHandler: EventHook<PacketEvent>;
    // private screenHandler: EventHook<ScreenEvent>;
    readonly shouldHide: boolean;
    readonly unlockCursor: boolean;
    onDisabled(): void;
}