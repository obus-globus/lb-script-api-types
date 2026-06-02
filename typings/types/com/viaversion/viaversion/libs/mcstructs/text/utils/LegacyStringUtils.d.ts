import type { TextFormatting } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/TextFormatting.d.ts'
import type { LegacyStringUtils$LegacyStyle } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/utils/LegacyStringUtils$LegacyStyle.d.ts'
import type { Function } from '../../../../../../../java/util/function/Function.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class LegacyStringUtils extends Object {
    static getStyleAt(paramarg0: string, paramarg1: number, paramarg2: boolean): LegacyStringUtils$LegacyStyle;
    static getStyleAt(paramarg0: string, paramarg1: number, paramarg2: (param0: string) => TextFormatting): LegacyStringUtils$LegacyStyle;
    static split(paramarg0: string, paramarg1: string, paramarg2: boolean): (Object | null)[];
    static split(paramarg0: string, paramarg1: string, paramarg2: (param0: string) => TextFormatting): (Object | null)[];
    constructor()
}