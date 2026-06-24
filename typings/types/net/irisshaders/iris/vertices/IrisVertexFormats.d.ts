import type { VertexFormat } from '../../../../com/mojang/blaze3d/vertex/VertexFormat.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class IrisVertexFormats extends Object {
    static CLOUDS: VertexFormat;
    static ENTITY: VertexFormat;
    static ENTITY_ATTRIBUTE: string;
    static ENTITY_ID_ATTRIBUTE: string;
    static GLYPH: VertexFormat;
    static MID_BLOCK_ATTRIBUTE: string;
    static MID_TEXTURE_ATTRIBUTE: string;
    static TANGENT_ATTRIBUTE: string;
    static TERRAIN: VertexFormat;
    static getOffset(paramarg0: VertexFormat, paramarg1: string): number;
    constructor()
}