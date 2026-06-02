import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { CameraTransform } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/viewport/CameraTransform.d.ts'
import type { Frustum } from '../../../../../../../net/caffeinemc/mods/sodium/client/render/viewport/frustum/Frustum.d.ts'
import type { BlockPos } from '../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { SectionPos } from '../../../../../../../net/minecraft/core/SectionPos.d.ts'
import type { Vector3d } from '../../../../../../../org/joml/Vector3d.d.ts'
export class Viewport extends Object {
    static CHUNK_SECTION_MARGIN: number;
    static CHUNK_SECTION_NEARBY_MARGIN: number;
    static CHUNK_SECTION_PADDED_RADIUS: number;
    static CHUNK_SECTION_RADIUS: number;
    constructor(arg0: Frustum, arg1: Vector3d)
    // private blockCoords: BlockPos;
    // private frustum: Frustum;
    // private sectionCoords: SectionPos;
    readonly transform: CameraTransform;
    getBlockCoord(): BlockPos;
    getBoxIntersectionDirect(arg0: number, arg1: number, arg2: number, arg3: number): number;
    getChunkCoord(): SectionPos;
    getTransform(): CameraTransform;
    isBoxVisible(arg0: number, arg1: number, arg2: number): boolean;
    isBoxVisibleDirect(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
    isBoxVisibleLooser(arg0: number, arg1: number, arg2: number): boolean;
}