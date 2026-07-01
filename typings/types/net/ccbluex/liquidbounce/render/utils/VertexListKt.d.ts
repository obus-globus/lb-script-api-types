import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { VertexList } from '../../../../../net/ccbluex/liquidbounce/render/utils/VertexList.d.ts'
export class VertexListKt extends Object {
    static forEachVertex(vertexList: VertexList, action: (param0: Object, param1: Object, param2: Object) => void): void;
    static lineStripAsLines(vertexList: VertexList): VertexList;
}