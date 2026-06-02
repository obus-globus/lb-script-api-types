import type { SoundEvent } from '../../../../../../../com/viaversion/viaversion/api/minecraft/SoundEvent.d.ts'
import type { Ops } from '../../../../../../../com/viaversion/viaversion/api/minecraft/codec/Ops.d.ts'
import type { HolderType } from '../../../../../../../com/viaversion/viaversion/api/type/types/misc/HolderType.d.ts'
import type { ByteBuf } from '../../../../../../../io/netty/buffer/ByteBuf.d.ts'
export class SoundEventType extends HolderType<SoundEvent> {
    constructor()
    readDirect(arg0: ByteBuf): SoundEvent;
    writeDirect(arg0: Ops, arg1: SoundEvent): void;
    writeDirect(arg0: ByteBuf, arg1: SoundEvent): void;
}