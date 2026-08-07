import type { DecimalFormat } from '../../../../../../../java/text/DecimalFormat.d.ts'
import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { PacketEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { ModuleTeleport$GroundMode } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/movement/ModuleTeleport$GroundMode.d.ts'
import type { Vec3 } from '../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
/**
 * Teleport Module
 *
 * Configuration for teleport commands.
 *
 * Commands: {@link CommandVClip}, {@link CommandTeleport}, {@link CommandPlayerTeleport}
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/dde6d7a0018da1394636c7c45dd551020f020f23/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleTeleport.kt#L50 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/ModuleTeleport.kt:50}
 */
export class ModuleTeleport extends ClientModule {
    static INSTANCE: ModuleTeleport;
    // private allFull: boolean;
    // private /*not mapped: */ getAllFull(): boolean;
    // private decimalFormat: DecimalFormat;
    // private functionAfterServerTeleport: number;
    // private /*not mapped: */ getFunctionAfterServerTeleport(): number;
    // private groundMode: ModuleTeleport$GroundMode;
    // private /*not mapped: */ getGroundMode(): ModuleTeleport$GroundMode;
    readonly highTp: boolean;
    readonly highTpAmount: number;
    // private indicatedTeleport: Vec3 | null;
    // private packetHandler: EventHook<PacketEvent>;
    // private paperExploit: boolean;
    // private /*not mapped: */ getPaperExploit(): boolean;
    // private resetMotion: boolean;
    // private /*not mapped: */ getResetMotion(): boolean;
    // private teleportsToWait: number;
    // private withDisabler: boolean;
    // private /*not mapped: */ getWithDisabler(): boolean;
    indicateTeleport(x: number, y: number, z: number): void;
    onDisabled(): void;
    onEnabled(): void;
    teleport(x: number, y: number, z: number): void;
}