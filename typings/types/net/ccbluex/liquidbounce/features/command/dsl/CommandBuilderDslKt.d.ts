import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Command } from '../../../../../../net/ccbluex/liquidbounce/features/command/Command.d.ts'
import type { Command$Factory } from '../../../../../../net/ccbluex/liquidbounce/features/command/Command$Factory.d.ts'
import type { Command$Handler$Context } from '../../../../../../net/ccbluex/liquidbounce/features/command/Command$Handler$Context.d.ts'
import type { Parameter } from '../../../../../../net/ccbluex/liquidbounce/features/command/Parameter.d.ts'
export class CommandBuilderDslKt extends Object {
    static buildCommand(name: string, block: (param0: Object) => void): Command;
    static cast(paramarg0: Command$Handler$Context, paramarg1: Parameter<Object>): Object | null;
    static castNotRequired(paramarg0: Command$Handler$Context, paramarg1: Parameter<Object>): Object | null;
    static castVararg(paramarg0: Command$Handler$Context, paramarg1: Parameter<Object>): (Object | null)[];
    static castVarargNotRequired(paramarg0: Command$Handler$Context, paramarg1: Parameter<Object>): (Object | null)[];
    static commandFactory(name: string, block: (param0: Object) => void): Command$Factory;
}