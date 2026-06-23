import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { Particle } from '../../../../../../com/viaversion/viaversion/api/minecraft/Particle.d.ts'
import type { Protocol } from '../../../../../../com/viaversion/viaversion/api/protocol/Protocol.d.ts'
import type { ClientboundPacket1_21_2 } from '../../../../../../com/viaversion/viaversion/protocols/v1_21to1_21_2/packet/ClientboundPacket1_21_2.d.ts'
import type { ParticleRewriter } from '../../../../../../com/viaversion/viaversion/rewriter/ParticleRewriter.d.ts'
export class ParticleRewriter1_21_2 extends ParticleRewriter<ClientboundPacket1_21_2> {
    constructor(arg0: Protocol<ClientboundPacket1_21_2, any, any, any>)
    // private argbToVector(arg0: Particle, arg1: number): void;
    rewriteParticle(arg0: UserConnection, arg1: Particle): void;
}