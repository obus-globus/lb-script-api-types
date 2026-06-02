import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ColorTheme } from '../../../../../../net/caffeinemc/mods/sodium/client/gui/ColorTheme.d.ts'
export class ButtonTheme extends ColorTheme {
    static PRESETS: (Object | null)[];
    constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number)
    constructor(arg0: ColorTheme, arg1: number, arg2: number, arg3: number)
    bgDefault: number;
    bgHighlight: number;
    bgInactive: number;
}