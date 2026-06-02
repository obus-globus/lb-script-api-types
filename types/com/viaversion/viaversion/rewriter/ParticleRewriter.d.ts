import type { UserConnection } from '../../../../com/viaversion/viaversion/api/connection/UserConnection.d.ts'
import type { Particle } from '../../../../com/viaversion/viaversion/api/minecraft/Particle.d.ts'
import type { Protocol } from '../../../../com/viaversion/viaversion/api/protocol/Protocol.d.ts'
import type { ClientboundPacketType } from '../../../../com/viaversion/viaversion/api/protocol/packet/ClientboundPacketType.d.ts'
import type { PacketWrapper } from '../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { PacketHandler } from '../../../../com/viaversion/viaversion/api/protocol/remapper/PacketHandler.d.ts'
import type { ParticleRewriter } from '../../../../com/viaversion/viaversion/api/rewriter/ParticleRewriter.d.ts'
import type { Type } from '../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ParticleRewriter<C extends ClientboundPacketType> extends Object implements ParticleRewriter {
    constructor(arg0: Protocol<C, Object, Object, Object>)
    // private mappedParticleType: Type<Particle>;
    // private particleType: Type<Particle>;
    // private protocol: Protocol<C, Object, Object, Object>;
    levelParticlesHandler1_13(arg0: Type<number>): (param0: PacketWrapper) => void;
    mappedParticleType(): Type<Particle>;
    particleType(): Type<Particle>;
    passthroughParticle(arg0: PacketWrapper): Particle;
    registerExplode1_20_5(arg0: C): void;
    registerExplode1_21_2(arg0: C): void;
    registerExplode1_21_9(arg0: C): void;
    registerLevelParticles1_13(arg0: C, arg1: Type<Object>): void;
    registerLevelParticles1_19(arg0: C): void;
    registerLevelParticles1_20_5(arg0: C): void;
    registerLevelParticles1_21_4(arg0: C): void;
    rewriteParticle(arg0: UserConnection, arg1: Particle): void;
}