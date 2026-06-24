import type { FeatureSilentScreen$drawInventoryTag$1 } from '../../../../../../../../../com/google/gson/LongSerializationPolicy$1.d.ts'
import type { ToggleableValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { EventHook } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { PacketEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
import type { ScreenEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/ScreenEvent.d.ts'
import type { BlockPos } from '../../../../../../../../../net/minecraft/core/BlockPos.d.ts'
/**
 * @see net.ccbluex.liquidbounce.injection.mixins.minecraft.client.MixinMinecraft
 * @see net.ccbluex.liquidbounce.injection.mixins.minecraft.gui.MixinAbstractContainerScreen
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/cheststealer/features/FeatureSilentScreen.kt#L43 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/cheststealer/features/FeatureSilentScreen.kt:43}
 */
export class FeatureSilentScreen extends ToggleableValueGroup {
    static INSTANCE: FeatureSilentScreen;
    // private drawInventoryTag: FeatureSilentScreen$drawInventoryTag$1;
    // private lastInteractedBlock: BlockPos | null;
    // private packetHandler: EventHook<PacketEvent>;
    // private screenHandler: EventHook<ScreenEvent>;
    readonly shouldHide: boolean;
    readonly unlockCursor: boolean;
    onDisabled(): void;
}