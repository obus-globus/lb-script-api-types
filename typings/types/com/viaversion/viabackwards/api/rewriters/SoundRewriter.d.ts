import type { AbstractProtocol } from '../../../../../com/viaversion/viaversion/api/protocol/AbstractProtocol.d.ts'
import type { ClientboundPacketType } from '../../../../../com/viaversion/viaversion/api/protocol/packet/ClientboundPacketType.d.ts'
import type { PacketWrapper } from '../../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { PacketHandler } from '../../../../../com/viaversion/viaversion/api/protocol/remapper/PacketHandler.d.ts'
import type { SoundRewriter as SoundRewriter_2 } from '../../../../../com/viaversion/viaversion/rewriter/SoundRewriter.d.ts'
export class SoundRewriter<C extends ClientboundPacketType> extends SoundRewriter_2<C> {
    constructor(arg0: AbstractProtocol<C, any, any, any>)
    getNamedSoundHandler(): (param0: PacketWrapper) => void;
    registerNamedSound(arg0: C): void;
    registerStopSound(arg0: C): void;
}