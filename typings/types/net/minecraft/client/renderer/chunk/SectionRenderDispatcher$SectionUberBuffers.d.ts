import type { UberGpuBuffer } from '../../../../../com/mojang/blaze3d/vertex/UberGpuBuffer.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { SectionMesh } from '../../../../../net/minecraft/client/renderer/chunk/SectionMesh.d.ts'
export class SectionRenderDispatcher$SectionUberBuffers extends Record {
    private constructor(vertexBuffer: UberGpuBuffer<SectionMesh>, indexBuffer: UberGpuBuffer<SectionMesh>)
    // private indexBuffer: UberGpuBuffer<SectionMesh>;
    // private vertexBuffer: UberGpuBuffer<SectionMesh>;
    equals(o: Object | null): boolean;
    hashCode(): number;
    indexBuffer(): UberGpuBuffer<SectionMesh>;
    toString(): string;
    vertexBuffer(): UberGpuBuffer<SectionMesh>;
}