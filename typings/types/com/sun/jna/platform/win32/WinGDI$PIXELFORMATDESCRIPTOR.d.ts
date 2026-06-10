import type { Pointer } from '../../../../../com/sun/jna/Pointer.d.ts'
import type { Structure } from '../../../../../com/sun/jna/Structure.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class WinGDI$PIXELFORMATDESCRIPTOR extends Structure {
    static ALIGN_DEFAULT: number;
    static ALIGN_GNUC: number;
    static ALIGN_MSVC: number;
    static ALIGN_NONE: number;
    static autoRead(paramarg0: (Object | null)[]): void;
    static autoWrite(paramarg0: (Object | null)[]): void;
    static createFieldsOrder(paramarg0: string): string[];
    static createFieldsOrder(paramarg0: (Object | null)[]): string[];
    static createFieldsOrder(paramarg0: string[], paramarg1: (Object | null)[]): string[];
    static createFieldsOrder(paramarg0: string[], paramarg1: string[]): string[];
    static newInstance(paramarg0: Class<Structure>): Structure | null;
    static newInstance(paramarg0: Class<Structure>, paramarg1: Pointer): Structure | null;
    constructor()
    constructor(arg0: Pointer)
    bReserved: number;
    cAccumAlphaBits: number;
    cAccumBits: number;
    cAccumBlueBits: number;
    cAccumGreenBits: number;
    cAccumRedBits: number;
    cAlphaBits: number;
    cAlphaShift: number;
    cAuxBuffers: number;
    cBlueBits: number;
    cBlueShift: number;
    cColorBits: number;
    cDepthBits: number;
    cGreenBits: number;
    cGreenShift: number;
    cRedBits: number;
    cRedShift: number;
    cStencilBits: number;
    dwDamageMask: number;
    dwFlags: number;
    dwLayerMask: number;
    dwVisibleMask: number;
    iLayerType: number;
    iPixelType: number;
    nSize: number;
    nVersion: number;
}