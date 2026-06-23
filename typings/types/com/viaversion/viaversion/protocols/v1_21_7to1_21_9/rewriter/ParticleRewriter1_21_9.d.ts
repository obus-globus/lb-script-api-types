import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { Particle } from '../../../../../../com/viaversion/viaversion/api/minecraft/Particle.d.ts'
import type { Protocol } from '../../../../../../com/viaversion/viaversion/api/protocol/Protocol.d.ts'
import type { ClientboundPacket1_21_6 } from '../../../../../../com/viaversion/viaversion/protocols/v1_21_5to1_21_6/packet/ClientboundPacket1_21_6.d.ts'
import type { ParticleRewriter } from '../../../../../../com/viaversion/viaversion/rewriter/ParticleRewriter.d.ts'
export class ParticleRewriter1_21_9 extends ParticleRewriter<ClientboundPacket1_21_6> {
    constructor(arg0: Protocol<ClientboundPacket1_21_6, any, any, any>)
    rewriteParticle(arg0: UserConnection, arg1: Particle): void;
}