import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Parameter } from '../../../../../../net/ccbluex/liquidbounce/features/command/Parameter.d.ts'
import type { CommandBuilder } from '../../../../../../net/ccbluex/liquidbounce/features/command/builder/CommandBuilder.d.ts'
import type { ParameterBuilder } from '../../../../../../net/ccbluex/liquidbounce/features/command/builder/ParameterBuilder.d.ts'
export class ParameterDslKt extends Object {
    static addParam(commandBuilder: CommandBuilder, name: string, block: (param0: Object) => ParameterBuilder<Object>): Parameter<Object>;
    static addParam(commandBuilder: CommandBuilder, block: (param0: Object) => ParameterBuilder<Object>): Parameter<Object>;
}