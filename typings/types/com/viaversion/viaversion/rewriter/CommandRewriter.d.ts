import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Protocol } from '../../../../com/viaversion/viaversion/api/protocol/Protocol.d.ts'
import type { ClientboundPacketType } from '../../../../com/viaversion/viaversion/api/protocol/packet/ClientboundPacketType.d.ts'
import type { PacketWrapper } from '../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { CommandRewriter$CommandArgumentConsumer } from '../../../../com/viaversion/viaversion/rewriter/CommandRewriter$CommandArgumentConsumer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class CommandRewriter<C extends ClientboundPacketType> extends Object {
    constructor(arg0: Protocol<C, any, any, any>)
    // private parserHandlers: JavaMap<string, (param0: PacketWrapper) => void>;
    // private protocol: Protocol<C, any, any, any>;
    argumentType(arg0: number): string;
    handle1_19(arg0: PacketWrapper): void;
    handleArgument(arg0: PacketWrapper, arg1: string): void;
    handleArgumentType(arg0: string): string;
    // private mapInvalidArgumentType(arg0: number): number;
    mappedArgumentTypeId(arg0: string): number;
    registerDeclareCommands(arg0: C): void;
    registerDeclareCommands1_19(arg0: C): void;
}