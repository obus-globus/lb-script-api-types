import type { Font } from '../../java/awt/Font.d.ts'
import type { FontRenderContext } from '../../java/awt/font/FontRenderContext.d.ts'
import type { AffineTransform } from '../../java/awt/geom/AffineTransform.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Font2D } from '../../sun/font/Font2D.d.ts'
export class FontStrikeDesc extends Object {
    static getAAHintIntVal(paramarg0: Object, paramarg1: Font2D, paramarg2: number): number;
    static getAAHintIntVal(paramarg0: Font2D, paramarg1: Font, paramarg2: FontRenderContext): number;
    static getFMHintIntVal(paramarg0: Object): number;
    constructor()
    constructor(arg0: AffineTransform, arg1: AffineTransform, arg2: number, arg3: number, arg4: number)
    constructor(arg0: FontStrikeDesc)
    // private aaHint: number;
    // private devTx: AffineTransform;
    // private fmHint: number;
    // private glyphTx: AffineTransform;
    // private hashCode: number;
    // private style: number;
    // private valuemask: number;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}