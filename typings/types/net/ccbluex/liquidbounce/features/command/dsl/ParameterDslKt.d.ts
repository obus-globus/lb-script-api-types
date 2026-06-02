import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Function1 } from '../../../../../../kotlin/jvm/functions/Function1.d.ts'
import type { Parameter } from '../../../../../../net/ccbluex/liquidbounce/features/command/Parameter.d.ts'
import type { CommandBuilder } from '../../../../../../net/ccbluex/liquidbounce/features/command/builder/CommandBuilder.d.ts'
export class ParameterDslKt extends Object {
    static addParam(paramarg0: CommandBuilder, paramarg1: string, paramarg2: Function1<Object, Object>): Parameter<Object>;
    static addParam(paramarg0: CommandBuilder, paramarg1: Function1<Object, Object>): Parameter<Object>;
}