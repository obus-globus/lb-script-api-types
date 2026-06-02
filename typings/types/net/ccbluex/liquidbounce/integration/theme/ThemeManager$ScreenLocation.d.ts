import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Theme } from '../../../../../net/ccbluex/liquidbounce/integration/theme/Theme.d.ts'
export class ThemeManager$ScreenLocation extends Object {
    constructor(theme: Theme, url: string)
    readonly theme: Theme;
    readonly url: string;
    component1(): Theme;
    component2(): string;
    copy(theme: Theme, url: string): ThemeManager$ScreenLocation;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}