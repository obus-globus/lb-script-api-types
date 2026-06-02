import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class GLXEXTImportContext extends Object {
    static GLX_SCREEN_EXT: number;
    static GLX_SHARE_CONTEXT_EXT: number;
    static GLX_VISUAL_ID_EXT: number;
    static glXFreeContextEXT(paramarg0: number, paramarg1: number): void;
    static glXGetContextIDEXT(paramarg0: number): number;
    static glXGetCurrentDisplayEXT(): number;
    static glXImportContextEXT(paramarg0: number, paramarg1: number): number;
    static glXQueryContextInfoEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number[]): number;
    static glXQueryContextInfoEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: IntBuffer): number;
    static nglXQueryContextInfoEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): number;
    constructor()
}