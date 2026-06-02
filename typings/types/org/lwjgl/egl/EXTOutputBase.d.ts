import type { IntBuffer } from '../../../java/nio/IntBuffer.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { PointerBuffer } from '../../../org/lwjgl/PointerBuffer.d.ts'
export class EXTOutputBase extends Object {
    static EGL_BAD_OUTPUT_LAYER_EXT: number;
    static EGL_BAD_OUTPUT_PORT_EXT: number;
    static EGL_NO_OUTPUT_LAYER_EXT: number;
    static EGL_NO_OUTPUT_PORT_EXT: number;
    static EGL_SWAP_INTERVAL_EXT: number;
    static eglGetOutputLayersEXT(paramarg0: number, paramarg1: PointerBuffer, paramarg2: PointerBuffer, paramarg3: number[]): boolean;
    static eglGetOutputLayersEXT(paramarg0: number, paramarg1: PointerBuffer, paramarg2: PointerBuffer, paramarg3: IntBuffer): boolean;
    static eglGetOutputPortsEXT(paramarg0: number, paramarg1: PointerBuffer, paramarg2: PointerBuffer, paramarg3: number[]): boolean;
    static eglGetOutputPortsEXT(paramarg0: number, paramarg1: PointerBuffer, paramarg2: PointerBuffer, paramarg3: IntBuffer): boolean;
    static eglOutputLayerAttribEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): boolean;
    static eglOutputPortAttribEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): boolean;
    static eglQueryOutputLayerAttribEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: PointerBuffer): boolean;
    static eglQueryOutputLayerStringEXT(paramarg0: number, paramarg1: number, paramarg2: number): string;
    static eglQueryOutputPortAttribEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: PointerBuffer): boolean;
    static eglQueryOutputPortStringEXT(paramarg0: number, paramarg1: number, paramarg2: number): string;
    static neglGetOutputLayersEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): number;
    static neglGetOutputPortsEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number, paramarg4: number): number;
    static neglQueryOutputLayerAttribEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static neglQueryOutputLayerStringEXT(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static neglQueryOutputPortAttribEXT(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number): number;
    static neglQueryOutputPortStringEXT(paramarg0: number, paramarg1: number, paramarg2: number): number;
    constructor()
}