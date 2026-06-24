import type { VertexFormat } from '../../../../../../../com/mojang/blaze3d/vertex/VertexFormat.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class VertexFormatOffsetCache extends Object {
    static COLOR: number;
    static LIGHT: number;
    static NORMAL: number;
    static OVERLAY: number;
    static POSITION: number;
    static UV: number;
    static getInstance(): VertexFormatOffsetCache;
    constructor()
    // private offsetCache: Map<VertexFormat, number[]>;
    getCachedOffsets(arg0: VertexFormat): number[];
}