import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Function1 } from '../../../../../../kotlin/jvm/functions/Function1.d.ts'
import type { Command } from '../../../../../../net/ccbluex/liquidbounce/features/command/Command.d.ts'
import type { Command$Factory } from '../../../../../../net/ccbluex/liquidbounce/features/command/Command$Factory.d.ts'
import type { Command$Handler$Context } from '../../../../../../net/ccbluex/liquidbounce/features/command/Command$Handler$Context.d.ts'
import type { Parameter } from '../../../../../../net/ccbluex/liquidbounce/features/command/Parameter.d.ts'
export class CommandBuilderDslKt extends Object {
    static buildCommand(paramarg0: string, paramarg1: Function1<Object, void>): Command;
    static cast(paramarg0: Command$Handler$Context, paramarg1: Parameter<Object>): Object | null;
    static castNotRequired(paramarg0: Command$Handler$Context, paramarg1: Parameter<Object>): Object | null;
    static castVararg(paramarg0: Command$Handler$Context, paramarg1: Parameter<Object>): (Object | null)[];
    static castVarargNotRequired(paramarg0: Command$Handler$Context, paramarg1: Parameter<Object>): (Object | null)[];
    static commandFactory(paramarg0: string, paramarg1: Function1<Object, void>): Command$Factory;
}