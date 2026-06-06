import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { GameTickEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { PacketEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
/**
 * NoClip module
 *
 * Allows you to fly through blocks.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleNoClip.kt#L31 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleNoClip.kt:31}
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