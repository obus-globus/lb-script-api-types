import type { Object } from '../../../../../../../../../java/lang/Object.d.ts'
import type { TQuad } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/quad/TQuad.d.ts'
import type { NormalList } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/trigger/NormalList.d.ts'
import type { NormalPlanes } from '../../../../../../../../../net/caffeinemc/mods/sodium/client/render/chunk/translucent_sorting/trigger/NormalPlanes.d.ts'
import type { SectionPos } from '../../../../../../../../../net/minecraft/core/SectionPos.d.ts'
import type { Vector3f } from '../../../../../../../../../org/joml/Vector3f.d.ts'
import type { Vector3fc } from '../../../../../../../../../org/joml/Vector3fc.d.ts'
export class GeometryPlanes extends Object {
    static fromQuadLists(paramarg0: SectionPos, paramarg1: (Object | null)[]): GeometryPlanes;
    constructor()
    // private alignedPlanes: NormalPlanes[];
    // private unalignedNormalScratch: Vector3f;
    // private unalignedPlanes: Map<Vector3fc, NormalPlanes>;
    addAlignedPlane(arg0: SectionPos, arg1: number, arg2: number): void;
    addDoubleSidedAlignedPlane(arg0: SectionPos, arg1: number, arg2: number): void;
    addDoubleSidedUnalignedPlane(arg0: SectionPos, arg1: Vector3fc, arg2: number): void;
    addQuadPlane(arg0: SectionPos, arg1: TQuad): void;
    addUnalignedPlane(arg0: SectionPos, arg1: Vector3fc, arg2: number): void;
    // private cleanNormal(arg0: Vector3fc): Vector3f;
    getAligned(): NormalPlanes[];
    getAlignedOrCreate(): NormalPlanes[];
    getPlanesForNormal(arg0: NormalList): NormalPlanes;
    getUnaligned(): E[];
    getUnalignedOrCreate(): Map<Vector3fc, NormalPlanes>;
    prepareAndGetDistances(): Map<Vector3fc, number[]>;
    // private prepareAndInsert(arg0: Map<Vector3fc, number[]>): void;
    prepareIntegration(): void;
}