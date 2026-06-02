import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class HtmlLayout$FontSize extends Enum<HtmlLayout$FontSize> {
    static LARGE: HtmlLayout$FontSize;
    static LARGER: HtmlLayout$FontSize;
    static MEDIUM: HtmlLayout$FontSize;
    static SMALL: HtmlLayout$FontSize;
    static SMALLER: HtmlLayout$FontSize;
    static XLARGE: HtmlLayout$FontSize;
    static XSMALL: HtmlLayout$FontSize;
    static XXLARGE: HtmlLayout$FontSize;
    static XXSMALL: HtmlLayout$FontSize;
    static getFontSize(paramsize: string): HtmlLayout$FontSize;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): HtmlLayout$FontSize;
    static values(): (Object | null)[];
    private constructor(size: string)
    // private size: string;
    getFontSize(): string;
    larger(): HtmlLayout$FontSize;
    name(): "SMALLER" | "XXSMALL" | "XSMALL" | "SMALL" | "MEDIUM" | "LARGE" | "XLARGE" | "XXLARGE" | "LARGER";
}