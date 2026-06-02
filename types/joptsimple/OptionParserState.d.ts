import type { ArgumentList } from '../joptsimple/ArgumentList.d.ts'
import type { OptionParser } from '../joptsimple/OptionParser.d.ts'
import type { OptionSet } from '../joptsimple/OptionSet.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
export abstract class OptionParserState extends Object {
    constructor()
    handleArgument(arg0: OptionParser, arg1: ArgumentList, arg2: OptionSet): void;
}