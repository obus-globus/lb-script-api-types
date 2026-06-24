import type { GpuBuffer } from '../../../../../../../com/mojang/blaze3d/buffers/GpuBuffer.d.ts'
import type { GpuBufferSlice$MappedView } from '../../../../../../../com/mojang/blaze3d/buffers/GpuBufferSlice$MappedView.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ChunkRenderMatrices } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/ChunkRenderMatrices.d.ts'
import type { FogParameters } from '../../../../../../../net/caffeinemc/mods/sodium/client/util/FogParameters.d.ts'
import type { ShadowRenderListAccess } from '../../../../../../../net/irisshaders/iris/mixinterface/ShadowRenderListAccess.d.ts'
import type { ClientLevel } from '../../../../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { MappableRingBuffer } from '../../../../../../../net/minecraft/client/renderer/MappableRingBuffer.d.ts'
export class UniformBufferManager extends Object implements ShadowRenderListAccess {
    constructor(arg0: ClientLevel, arg1: number)
    // private hasUpdatedThisFrame: boolean;
    // private isSwappedToShadow: boolean;
    readonly sectionTimeInfo: GpuBuffer;
    // private sectionTimeInfoMap: GpuBufferSlice$MappedView;
    // private shadowUbo: MappableRingBuffer;
    // private shadowUboFrame: boolean;
    // private uniformData: MappableRingBuffer;
    delete(): void;
    getSectionTimeInfo(): GpuBuffer;
    getUniformBuffer(): GpuBuffer;
    iris$beginShadowRenderListScope(): void;
    iris$endShadowRenderListScope(): void;
    prepareFrame(): void;
    update(arg0: ChunkRenderMatrices, arg1: FogParameters): void;
    writeMeshTimes(arg0: number, arg1: number, arg2: number): void;
}