import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { VertexList } from '../../../../../net/ccbluex/liquidbounce/render/utils/VertexList.d.ts'
export class VertexListKt extends Object {
    static forEachVertex(self: VertexList, action: (param0: number, param1: number, param2: number) => void): void;
    static lineStripAsLines(self: VertexList): VertexList;
}