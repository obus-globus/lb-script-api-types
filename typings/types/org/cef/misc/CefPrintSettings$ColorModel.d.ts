import type { Class } from '../../../java/lang/Class.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class CefPrintSettings$ColorModel extends Enum<CefPrintSettings$ColorModel> {
    static COLOR_MODEL_BLACK: CefPrintSettings$ColorModel;
    static COLOR_MODEL_CMY: CefPrintSettings$ColorModel;
    static COLOR_MODEL_CMYK: CefPrintSettings$ColorModel;
    static COLOR_MODEL_CMY_K: CefPrintSettings$ColorModel;
    static COLOR_MODEL_COLOR: CefPrintSettings$ColorModel;
    static COLOR_MODEL_COLORMODE_COLOR: CefPrintSettings$ColorModel;
    static COLOR_MODEL_COLORMODE_MONOCHROME: CefPrintSettings$ColorModel;
    static COLOR_MODEL_GRAY: CefPrintSettings$ColorModel;
    static COLOR_MODEL_GRAYSCALE: CefPrintSettings$ColorModel;
    static COLOR_MODEL_HP_COLOR_BLACK: CefPrintSettings$ColorModel;
    static COLOR_MODEL_HP_COLOR_COLOR: CefPrintSettings$ColorModel;
    static COLOR_MODEL_KCMY: CefPrintSettings$ColorModel;
    static COLOR_MODEL_PRINTOUTMODE_NORMAL: CefPrintSettings$ColorModel;
    static COLOR_MODEL_PRINTOUTMODE_NORMAL_GRAY: CefPrintSettings$ColorModel;
    static COLOR_MODEL_PROCESSCOLORMODEL_CMYK: CefPrintSettings$ColorModel;
    static COLOR_MODEL_PROCESSCOLORMODEL_GREYSCALE: CefPrintSettings$ColorModel;
    static COLOR_MODEL_PROCESSCOLORMODEL_RGB: CefPrintSettings$ColorModel;
    static COLOR_MODEL_RGB: CefPrintSettings$ColorModel;
    static COLOR_MODEL_RGB16: CefPrintSettings$ColorModel;
    static COLOR_MODEL_RGBA: CefPrintSettings$ColorModel;
    static COLOR_MODEL_UNKNOWN: CefPrintSettings$ColorModel;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): CefPrintSettings$ColorModel;
    static values(): CefPrintSettings$ColorModel[];
    private constructor()
    name(): "COLOR_MODEL_UNKNOWN" | "COLOR_MODEL_GRAY" | "COLOR_MODEL_COLOR" | "COLOR_MODEL_CMYK" | "COLOR_MODEL_CMY" | "COLOR_MODEL_KCMY" | "COLOR_MODEL_CMY_K" | "COLOR_MODEL_BLACK" | "COLOR_MODEL_GRAYSCALE" | "COLOR_MODEL_RGB" | "COLOR_MODEL_RGB16" | "COLOR_MODEL_RGBA" | "COLOR_MODEL_COLORMODE_COLOR" | "COLOR_MODEL_COLORMODE_MONOCHROME" | "COLOR_MODEL_HP_COLOR_COLOR" | "COLOR_MODEL_HP_COLOR_BLACK" | "COLOR_MODEL_PRINTOUTMODE_NORMAL" | "COLOR_MODEL_PRINTOUTMODE_NORMAL_GRAY" | "COLOR_MODEL_PROCESSCOLORMODEL_CMYK" | "COLOR_MODEL_PROCESSCOLORMODEL_GREYSCALE" | "COLOR_MODEL_PROCESSCOLORMODEL_RGB";
}