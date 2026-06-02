import type { Object } from '../../../java/lang/Object.d.ts'
export class NVConditionalRender extends Object {
    static GL_QUERY_BY_REGION_NO_WAIT_NV: number;
    static GL_QUERY_BY_REGION_WAIT_NV: number;
    static GL_QUERY_NO_WAIT_NV: number;
    static GL_QUERY_WAIT_NV: number;
    static glBeginConditionalRenderNV(paramarg0: number, paramarg1: number): void;
    static glEndConditionalRenderNV(): void;
    constructor()
}