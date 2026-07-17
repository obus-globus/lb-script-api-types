import type { JavaMap } from '../../JavaMap.d.ts'
import type { Paint } from '../../java/awt/Paint.d.ts'
import type { PaintContext } from '../../java/awt/PaintContext.d.ts'
import type { Rectangle } from '../../java/awt/Rectangle.d.ts'
import type { ColorSpace } from '../../java/awt/color/ColorSpace.d.ts'
import type { AffineTransform } from '../../java/awt/geom/AffineTransform.d.ts'
import type { Rectangle2D } from '../../java/awt/geom/Rectangle2D.d.ts'
import type { ColorModel } from '../../java/awt/image/ColorModel.d.ts'
import type { Serializable } from '../../java/io/Serializable.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class Color extends Object implements Paint, Serializable {
    static BITMASK: number;
    static BLACK: Color;
    static BLUE: Color;
    static CYAN: Color;
    static DARK_GRAY: Color;
    static GRAY: Color;
    static GREEN: Color;
    static LIGHT_GRAY: Color;
    static MAGENTA: Color;
    static OPAQUE: number;
    static ORANGE: Color;
    static PINK: Color;
    static RED: Color;
    static TRANSLUCENT: number;
    static WHITE: Color;
    static YELLOW: Color;
    static black: Color;
    static blue: Color;
    static cyan: Color;
    static darkGray: Color;
    static gray: Color;
    static green: Color;
    static lightGray: Color;
    static magenta: Color;
    static orange: Color;
    static pink: Color;
    static red: Color;
    static white: Color;
    static yellow: Color;
    static HSBtoRGB(paramarg0: number, paramarg1: number, paramarg2: number): number;
    static RGBtoHSB(paramarg0: number, paramarg1: number, paramarg2: number, paramarg3: number[]): number[];
    static decode(paramarg0: string): Color;
    static getColor(paramarg0: string): Color;
    static getColor(paramarg0: string, paramarg1: number): Color;
    static getColor(paramarg0: string, paramarg1: Color): Color;
    static getHSBColor(paramarg0: number, paramarg1: number, paramarg2: number): Color;
    constructor(arg0: ColorSpace, arg1: number[], arg2: number)
    constructor(arg0: number, arg1: number, arg2: number)
    constructor(arg0: number, arg1: number, arg2: number, arg3: number)
    constructor(arg0: number)
    constructor(arg0: number, arg1: boolean)
    constructor(arg0: number, arg1: number, arg2: number)
    constructor(arg0: number, arg1: number, arg2: number, arg3: number)
    // private cs: ColorSpace;
    // private falpha: number;
    // private frgbvalue: number[];
    // private fvalue: number[];
    // private value: number;
    brighter(): Color;
    createContext(arg0: ColorModel, arg1: Rectangle, arg2: Rectangle2D, arg3: AffineTransform, arg4: JavaMap<any, any>): PaintContext;
    darker(): Color;
    equals(arg0: Object | null): boolean;
    getAlpha(): number;
    getBlue(): number;
    getColorComponents(arg0: ColorSpace, arg1: number[]): number[];
    getColorComponents(arg0: number[]): number[];
    getColorSpace(): ColorSpace;
    getComponents(arg0: ColorSpace, arg1: number[]): number[];
    getComponents(arg0: number[]): number[];
    getGreen(): number;
    getRGB(): number;
    getRGBColorComponents(arg0: number[]): number[];
    getRGBComponents(arg0: number[]): number[];
    getRed(): number;
    getTransparency(): number;
    hashCode(): number;
    toString(): string;
}