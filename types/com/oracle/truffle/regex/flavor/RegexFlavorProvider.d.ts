import type { RegexFlavor } from '../../../../../com/oracle/truffle/regex/tregex/parser/RegexFlavor.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface RegexFlavorProvider extends Object{
    get(): RegexFlavor;
}