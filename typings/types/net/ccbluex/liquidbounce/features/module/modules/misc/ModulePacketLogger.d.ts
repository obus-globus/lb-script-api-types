import type { JavaMap } from '../../../../../../../JavaMap.d.ts'
import type { File } from '../../../../../../../java/io/File.d.ts'
import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Field } from '../../../../../../../java/lang/reflect/Field.d.ts'
import type { AtomicRef } from '../../../../../../../kotlinx/atomicfu/AtomicRef.d.ts'
import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { PacketEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
import type { TransferOrigin } from '../../../../../../../net/ccbluex/liquidbounce/event/events/TransferOrigin.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { ModulePacketLogger$OutputTarget } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/misc/ModulePacketLogger$OutputTarget.d.ts'
import type { ModulePacketLogger$PacketField } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/misc/ModulePacketLogger$PacketField.d.ts'
import type { Filter } from '../../../../../../../net/ccbluex/liquidbounce/utils/collection/Filter.d.ts'
import type { Packet } from '../../../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { Identifier } from '../../../../../../../net/minecraft/resources/Identifier.d.ts'
/**
 * Module PacketLogger
 *
 * Prints all packets and their fields.
 *
 * @author ccetl
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f8feafa08d369aac1d83c7e0e334da0690fd875/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/ModulePacketLogger.kt#L67 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/ModulePacketLogger.kt:67}
 */
export class ModulePacketLogger extends ClientModule {
    static INSTANCE: ModulePacketLogger;
    // private classNames: JavaMap<Class<Packet<any>>, string>;
    // private clientPackets: Identifier[];
    // private /*not mapped: */ getClientPackets(): Identifier[];
    // private fieldNames: JavaMap<Field, string>;
    // private filter: Filter;
    // private /*not mapped: */ getFilter(): Filter;
    // private outputDir: File;
    // private outputFile: AtomicRef<File>;
    // private outputTarget: ModulePacketLogger$OutputTarget[];
    // private /*not mapped: */ getOutputTarget(): ModulePacketLogger$OutputTarget[];
    // private packetHandler: EventHook<PacketEvent>;
    readonly running: boolean;
    // private serverPackets: Identifier[];
    // private /*not mapped: */ getServerPackets(): Identifier[];
    // private showFieldType: boolean;
    // private /*not mapped: */ getShowFieldType(): boolean;
    // private collectFields(clazz: Class<Packet<any>>, packet: Packet<any>): ModulePacketLogger$PacketField[];
    // private createFileIfNeeded(): void;
    onDisabled(): void;
    onEnabled(): void;
    onPacket(origin: TransferOrigin, packet: Packet<any>, canceled: boolean): void;
}