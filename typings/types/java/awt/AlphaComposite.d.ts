import type { Composite } from '../../java/awt/Composite.d.ts'
import type { CompositeContext } from '../../java/awt/CompositeContext.d.ts'
import type { ColorModel } from '../../java/awt/image/ColorModel.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class AlphaComposite extends Object implements Composite {
    static CLEAR: number;
    static Clear: AlphaComposite;
    static DST: number;
    static DST_ATOP: number;
    static DST_IN: number;
    static DST_OUT: number;
    static DST_OVER: number;
    static Dst: AlphaComposite;
    static DstAtop: AlphaComposite;
    static DstIn: AlphaComposite;
    static DstOut: AlphaComposite;
    static DstOver: AlphaComposite;
    static SRC: number;
    static SRC_ATOP: number;
    static SRC_IN: number;
    static SRC_OUT: number;
    static SRC_OVER: number;
    static Src: AlphaComposite;
    static SrcAtop: AlphaComposite;
    static SrcIn: AlphaComposite;
    static SrcOut: AlphaComposite;
    static SrcOver: AlphaComposite;
    static XOR: number;
    static Xor: AlphaComposite;
    static getInstance(paramarg0: number): AlphaComposite;
    static getInstance(paramarg0: number, paramarg1: number): AlphaComposite;
    private constructor(arg0: number)
    private constructor(arg0: number, arg1: number)
    // private extraAlpha: number;
    rule: number;
    createContext(arg0: ColorModel, arg1: ColorModel, arg2: RenderingHints): CompositeContext;
    derive(arg0: number): AlphaComposite;
    equals(arg0: Object | null): boolean;
    getAlpha(): number;
    getRule(): number;
    hashCode(): number;
}