import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { NativeBuffer } from '../../../../../../../../net/caffeinemc/mods/sodium/client/util/NativeBuffer.d.ts'
export class BuiltSectionMeshParts extends Object {
    constructor(arg0: NativeBuffer, arg1: number[])
    // private buffer: NativeBuffer;
    readonly vertexSegments: number[];
    computeVertexCounts(): number[];
    getVertexData(): NativeBuffer;
    getVertexSegments(): number[];
}