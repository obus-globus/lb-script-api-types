import type { Protocol1_13To1_12_2 } from '../../../../../../com/viaversion/viabackwards/protocol/v1_13to1_12_2/Protocol1_13To1_12_2.d.ts'
import type { ParticleIdMappings1_12_2$ParticleHandler } from '../../../../../../com/viaversion/viabackwards/protocol/v1_13to1_12_2/data/ParticleIdMappings1_12_2$ParticleHandler.d.ts'
import type { Particle$ParticleData } from '../../../../../../com/viaversion/viaversion/api/minecraft/Particle$ParticleData.d.ts'
import type { PacketWrapper } from '../../../../../../com/viaversion/viaversion/api/protocol/packet/PacketWrapper.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ParticleIdMappings1_12_2$ParticleData extends Object {
    private constructor(arg0: number)
    private constructor(arg0: number, arg1: ParticleIdMappings1_12_2$ParticleHandler)
    readonly handler: ParticleIdMappings1_12_2$ParticleHandler;
    readonly historyId: number;
    getHandler(): ParticleIdMappings1_12_2$ParticleHandler;
    getHistoryId(): number;
    rewriteData(arg0: Protocol1_13To1_12_2, arg1: PacketWrapper): number[];
    rewriteMeta(arg0: Protocol1_13To1_12_2, arg1: Particle$ParticleData<Object>[]): number[];
}