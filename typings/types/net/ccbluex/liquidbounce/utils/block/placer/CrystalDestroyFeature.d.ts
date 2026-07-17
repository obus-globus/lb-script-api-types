import type { ModeValueGroup } from '../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { ToggleableValueGroup } from '../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { EventHook } from '../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { EventListener } from '../../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { GameTickEvent } from '../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { PacketEvent } from '../../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
import type { ClientModule } from '../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { RotationMode } from '../../../../../../net/ccbluex/liquidbounce/utils/aiming/RotationMode.d.ts'
import type { SwingMode } from '../../../../../../net/ccbluex/liquidbounce/utils/block/SwingMode.d.ts'
import type { Chronometer } from '../../../../../../net/ccbluex/liquidbounce/utils/client/Chronometer.d.ts'
import type { EndCrystal } from '../../../../../../net/minecraft/world/entity/boss/enderdragon/EndCrystal.d.ts'
export class CrystalDestroyFeature extends ToggleableValueGroup {
    constructor(eventListener: EventListener, module: ClientModule)
    // private chronometer: Chronometer;
    currentTarget: EndCrystal | null;
    // private delay: number;
    // private /*not mapped: */ getDelay(): number;
    readonly destroyEntityHandler: EventHook<PacketEvent>;
    // private module: ClientModule;
    // private range: number;
    // private /*not mapped: */ getRange(): number;
    readonly repeatable: EventHook<GameTickEvent>;
    // private rotationMode: ModeValueGroup<RotationMode>;
    // private swingMode: SwingMode;
    // private /*not mapped: */ getSwingMode(): SwingMode;
    // private wallRange: number;
    // private /*not mapped: */ getWallRange(): number;
    /**
     * This should be called when the module using this destroyer is disabled.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/567a259aa7f4250a1b2911700de4282fe934a3d9/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/placer/CrystalDestroyFeature.kt#L135 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/placer/CrystalDestroyFeature.kt:135}
     */
    onDisable(): void;
    // private wouldKill(target: EndCrystal): boolean;
}