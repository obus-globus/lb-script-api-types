import type { Object } from '../../../java/lang/Object.d.ts'
import type { FormattedText } from '../../../net/minecraft/network/chat/FormattedText.d.ts'
import type { Style } from '../../../net/minecraft/network/chat/Style.d.ts'
import type { FormattedCharSink } from '../../../net/minecraft/util/FormattedCharSink.d.ts'
export class StringDecomposer extends Object {
    static filterBrokenSurrogates(paraminput: string): string;
    static getPlainText(paraminput: FormattedText): string;
    static iterate(paramstring: string, paramstyle: Style, paramoutput: (param0: number, param1: Style, param2: number) => kotlin.Boolean): boolean;
    static iterateBackwards(paramstring: string, paramstyle: Style, paramoutput: (param0: number, param1: Style, param2: number) => kotlin.Boolean): boolean;
    static iterateFormatted(paramstring: string, paramoffset: number, paramcurrentStyle: Style, paramresetStyle: Style, paramoutput: (param0: number, param1: Style, param2: number) => kotlin.Boolean): boolean;
    static iterateFormatted(paramstring: string, paramoffset: number, paramstyle: Style, paramoutput: (param0: number, param1: Style, param2: number) => kotlin.Boolean): boolean;
    static iterateFormatted(paramstring: string, paramstyle: Style, paramoutput: (param0: number, param1: Style, param2: number) => kotlin.Boolean): boolean;
    static iterateFormatted(paramcomponent: FormattedText, paramrootStyle: Style, paramoutput: (param0: number, param1: Style, param2: number) => kotlin.Boolean): boolean;
    constructor()
}