import type { Protocol } from '../../../../com/viaversion/viaversion/api/protocol/Protocol.d.ts'
import type { ClientboundPacketType } from '../../../../com/viaversion/viaversion/api/protocol/packet/ClientboundPacketType.d.ts'
import type { ServerboundPacketType } from '../../../../com/viaversion/viaversion/api/protocol/packet/ServerboundPacketType.d.ts'
import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Level } from '../../../../java/util/logging/Level.d.ts'
import type { Logger } from '../../../../java/util/logging/Logger.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
export class ProtocolLogger extends Object {
    constructor(arg0: Class<Protocol<ClientboundPacketType, ClientboundPacketType, ServerboundPacketType, ServerboundPacketType>>)
    constructor(arg0: Logger, arg1: Class<Protocol<ClientboundPacketType, ClientboundPacketType, ServerboundPacketType, ServerboundPacketType>>)
    // private logger: Logger;
    // private name: string;
    // private formatMessage(arg0: string): string;
    log(arg0: Level, arg1: string): void;
    log(arg0: Level, arg1: string, arg2: Throwable): void;
    severe(arg0: string): void;
    warning(arg0: string): void;
}