import type { Holder } from '../../../../com/viaversion/viaversion/api/minecraft/Holder.d.ts'
import type { SoundEvent } from '../../../../com/viaversion/viaversion/api/minecraft/SoundEvent.d.ts'
import type { Protocol } from '../../../../com/viaversion/viaversion/api/protocol/Protocol.d.ts'
import type { ClientboundPacketType } from '../../../../com/viaversion/viaversion/api/protocol/packet/ClientboundPacketType.d.ts'
import type { PacketWrapper } from '../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { PacketHandler } from '../../../../com/viaversion/viaversion/api/protocol/remapper/PacketHandler.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class SoundRewriter<C extends ClientboundPacketType> extends Object {
    constructor(arg0: Protocol<C, Object, Object, Object>)
    // private protocol: Protocol<C, Object, Object, Object>;
    getSoundHandler(): (param0: PacketWrapper) => void;
    registerSound(arg0: C): void;
    registerSound1_19_3(arg0: C): void;
    rewriteSoundEvent(arg0: PacketWrapper, arg1: Holder<SoundEvent>): Holder<SoundEvent>;
    soundHolderHandler(): (param0: PacketWrapper) => void;
}