import type { ArgumentAcceptingOptionSpec } from '../joptsimple/ArgumentAcceptingOptionSpec.d.ts'
import type { ArgumentList } from '../joptsimple/ArgumentList.d.ts'
import type { OptionParser } from '../joptsimple/OptionParser.d.ts'
import type { OptionSet } from '../joptsimple/OptionSet.d.ts'
import type { Object } from '../java/lang/Object.d.ts'
export class RequiredArgumentOptionSpec<V extends Object | number | string | boolean> extends ArgumentAcceptingOptionSpec<V> {
    constructor(arg0: string)
    constructor(arg0: string[], arg1: string)
    detectOptionArgument(arg0: OptionParser, arg1: ArgumentList, arg2: OptionSet): void;
}