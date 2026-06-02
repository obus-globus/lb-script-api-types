import type { Function } from '../../../../../com/sun/jna/Function.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class OpenGL32Util extends Object {
    static countGpusNV(): number;
    static wglGetProcAddress(paramarg0: string): Function;
    constructor()
}