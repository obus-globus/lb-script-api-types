import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { PacketEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
/**
 * NoClip module
 *
 * Allows you to fly through blocks.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a70a63864fcba3b841f36d8b1ab0c71ea03e76f8/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleNoClip.kt#L36 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleNoClip.kt:36}
 */
export class ModuleNoClip extends ClientModule {
    static INSTANCE: ModuleNoClip;
    // private disableOnSetback: boolean;
    // private /*not mapped: */ getDisableOnSetback(): boolean;
    // private handleGameTick: EventHook<GameTickEvent>;
    // private noClipSet: boolean;
    // private onlyInVehicle: boolean;
    // private /*not mapped: */ getOnlyInVehicle(): boolean;
    readonly packetHandler: EventHook<PacketEvent>;
    readonly speed: number;
    onDisabled(): void;
    paused(): boolean;
}