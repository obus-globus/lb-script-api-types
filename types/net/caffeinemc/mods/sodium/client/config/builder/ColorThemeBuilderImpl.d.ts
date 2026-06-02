import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ColorThemeBuilder } from '../../../../../../../net/caffeinemc/mods/sodium/api/config/structure/ColorThemeBuilder.d.ts'
import type { ColorTheme } from '../../../../../../../net/caffeinemc/mods/sodium/client/gui/ColorTheme.d.ts'
export class ColorThemeBuilderImpl extends Object implements ColorThemeBuilder {
    constructor()
    // private baseTheme: number;
    // private themeDisabled: number;
    // private themeHighlight: number;
    build(): ColorTheme;
    setBaseThemeRGB(arg0: number): ColorThemeBuilder;
    setFullThemeRGB(arg0: number, arg1: number, arg2: number): ColorThemeBuilder;
}