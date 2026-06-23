import type { UserConnection } from '../../../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { Particle } from '../../../../../../com/viaversion/viaversion/api/minecraft/Particle.d.ts'
import type { Protocol } from '../../../../../../com/viaversion/viaversion/api/protocol/Protocol.d.ts'
import type { ClientboundPacket1_21 } from '../../../../../../com/viaversion/viaversion/protocols/v1_20_5to1_21/packet/ClientboundPacket1_21.d.ts'
import type { ParticleRewriter } from '../../../../../../com/viaversion/viaversion/rewriter/ParticleRewriter.d.ts'
export class ParticleRewriter1_21_2 extends ParticleRewriter<ClientboundPacket1_21> {
    constructor(arg0: Protocol<ClientboundPacket1_21, any, any, any>)
    // private floatsToARGB(arg0: Particle, arg1: number): void;
    rewriteParticle(arg0: UserConnection, arg1: Particle): void;
}