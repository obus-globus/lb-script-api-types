import type { RegexFlavorProvider } from '../../../../../../com/oracle/truffle/regex/flavor/RegexFlavorProvider.d.ts'
import type { RegexFlavor } from '../../../../../../com/oracle/truffle/regex/tregex/parser/RegexFlavor.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class RubyFlavorProvider extends Object implements RegexFlavorProvider {
    constructor()
    get(): RegexFlavor;
}