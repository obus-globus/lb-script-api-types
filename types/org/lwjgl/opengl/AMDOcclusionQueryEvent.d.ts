import type { Object } from '../../../java/lang/Object.d.ts'
export class AMDOcclusionQueryEvent extends Object {
    static GL_OCCLUSION_QUERY_EVENT_MASK_AMD: number;
    static GL_QUERY_ALL_EVENT_BITS_AMD: number;
    static GL_QUERY_DEPTH_BOUNDS_FAIL_EVENT_BIT_AMD: number;
    static GL_QUERY_DEPTH_FAIL_EVENT_BIT_AMD: number;
    static GL_QUERY_DEPTH_PASS_EVENT_BIT_AMD: number;
    static GL_QUERY_STENCIL_FAIL_EVENT_BIT_AMD: number;
    static glQueryObjectParameteruiAMD(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): void;
    constructor()
}