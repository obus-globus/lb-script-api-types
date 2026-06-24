import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { GlBufferArena } from '../../../../../../../../net/caffeinemc/mods/sodium/client/gpu/arena/GlBufferArena.d.ts'
import type { GlBufferSegment } from '../../../../../../../../net/caffeinemc/mods/sodium/client/gpu/arena/GlBufferSegment.d.ts'
export class SectionRenderDataStorage extends Object {
    constructor(arg0: boolean)
    // private elementAllocations: GlBufferSegment[];
    // private needsSharedIndexUpdate: boolean;
    // private pMeshDataArray: number;
    // private sharedIndexAllocation: GlBufferSegment;
    // private sharedIndexCapacity: number;
    // private sharedIndexUsage: number[];
    // private vertexAllocations: GlBufferSegment[];
    delete(): void;
    getDataPointer(arg0: number): number;
    needsSharedIndexUpdate(): boolean;
    onBufferResized(): void;
    onIndexBufferResized(): void;
    removeData(arg0: number): void;
    // private removeData(arg0: number, arg1: boolean, arg2: boolean): void;
    removeIndexData(arg0: number): void;
    removeVertexData(arg0: number): void;
    setIndexData(arg0: number, arg1: GlBufferSegment): void;
    setSharedIndexUsage(arg0: number, arg1: number): boolean;
    setVertexData(arg0: number, arg1: GlBufferSegment, arg2: number[]): void;
    // private storesIndexData(): boolean;
    // private updateMeshes(arg0: number): void;
    updateSharedIndexData(arg0: GlBufferArena, arg1: number): boolean;
}