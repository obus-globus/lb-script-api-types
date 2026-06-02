import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { Particle } from '../../../../../../com/viaversion/viaversion/api/minecraft/Particle.d.ts'
import type { Protocol } from '../../../../../../com/viaversion/viaversion/api/protocol/Protocol.d.ts'
import type { ClientboundPacket1_21_9 } from '../../../../../../com/viaversion/viaversion/protocols/v1_21_7to1_21_9/packet/ClientboundPacket1_21_9.d.ts'
import type { ParticleRewriter } from '../../../../../../com/viaversion/viaversion/rewriter/ParticleRewriter.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ParticleRewriter1_21_9 extends ParticleRewriter<ClientboundPacket1_21_9> {
    constructor(arg0: Protocol<ClientboundPacket1_21_9, Object, Object, Object>)
    rewriteParticle(arg0: UserConnection, arg1: Particle): void;
}