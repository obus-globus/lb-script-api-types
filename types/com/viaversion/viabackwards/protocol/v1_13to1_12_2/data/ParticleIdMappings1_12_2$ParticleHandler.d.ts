import type { Protocol1_13To1_12_2 } from '../../../../../../com/viaversion/viabackwards/protocol/v1_13to1_12_2/Protocol1_13To1_12_2.d.ts'
import type { Particle$ParticleData } from '../../../../../../com/viaversion/viaversion/api/minecraft/Particle$ParticleData.d.ts'
import type { PacketWrapper } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface ParticleIdMappings1_12_2$ParticleHandler extends Object{
    isBlockHandler(): boolean;
    rewrite(arg0: Protocol1_13To1_12_2, arg1: PacketWrapper): number[];
    rewrite(arg0: Protocol1_13To1_12_2, arg1: Particle$ParticleData<Object>[]): number[];
}