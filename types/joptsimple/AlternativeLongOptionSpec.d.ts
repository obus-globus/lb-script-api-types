import type { ArgumentAcceptingOptionSpec } from '../joptsimple/ArgumentAcceptingOptionSpec.d.ts'
import type { ArgumentList } from '../joptsimple/ArgumentList.d.ts'
import type { OptionParser } from '../joptsimple/OptionParser.d.ts'
import type { OptionSet } from '../joptsimple/OptionSet.d.ts'
export class AlternativeLongOptionSpec extends ArgumentAcceptingOptionSpec<string> {
    constructor()
    detectOptionArgument(arg0: OptionParser, arg1: ArgumentList, arg2: OptionSet): void;
}