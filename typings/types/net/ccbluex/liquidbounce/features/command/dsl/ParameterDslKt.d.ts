import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Function1 } from '../../../../../../kotlin/jvm/functions/Function1.d.ts'
import type { Parameter } from '../../../../../../net/ccbluex/liquidbounce/features/command/Parameter.d.ts'
import type { CommandBuilder } from '../../../../../../net/ccbluex/liquidbounce/features/command/builder/CommandBuilder.d.ts'
export class ParameterDslKt extends Object {
    static addParam(commandBuilder: CommandBuilder, name: string, block: Function1<Object, Object>): Parameter<Object>;
    static addParam(commandBuilder: CommandBuilder, block: Function1<Object, Object>): Parameter<Object>;
}