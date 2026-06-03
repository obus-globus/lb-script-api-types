import type { FullMappings } from '../../../../../../../com/viaversion/viaversion/api/data/FullMappings.d.ts'
import type { Particle } from '../../../../../../../com/viaversion/viaversion/api/minecraft/Particle.d.ts'
import type { Ops } from '../../../../../../../com/viaversion/viaversion/api/minecraft/codec/Ops.d.ts'
import type { Protocol } from '../../../../../../../com/viaversion/viaversion/api/protocol/Protocol.d.ts'
import type { DynamicType } from '../../../../../../../com/viaversion/viaversion/api/type/types/misc/DynamicType.d.ts'
import type { ByteBuf } from '../../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class ParticleType extends DynamicType<Particle> {
    constructor()
    mappings(arg0: Protocol<Object, Object, Object, Object>): FullMappings;
    read(arg0: ByteBuf): Particle;
    write(arg0: Ops, arg1: Particle): void;
    write(arg0: ByteBuf, arg1: Particle): void;
}