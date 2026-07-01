import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { VertexList } from '../../../../../net/ccbluex/liquidbounce/render/utils/VertexList.d.ts'
import type { Vector3f } from '../../../../../org/joml/Vector3f.d.ts'
export class LineStripAsLinesVertexView extends Object implements VertexList {
    constructor(source: VertexList)
    readonly size: number;
    // private source: VertexList;
    vec(index: number, dest: Vector3f): Vector3f;
    x(index: number): number;
    y(index: number): number;
    z(index: number): number;
}