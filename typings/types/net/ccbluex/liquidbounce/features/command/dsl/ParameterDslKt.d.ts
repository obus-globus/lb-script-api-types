import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Parameter } from '../../../../../../net/ccbluex/liquidbounce/features/command/Parameter.d.ts'
import type { CommandBuilder } from '../../../../../../net/ccbluex/liquidbounce/features/command/builder/CommandBuilder.d.ts'
export class ParameterDslKt extends Object {
    static addParam(commandBuilder: CommandBuilder, name: string, block: (param0: Object | null) => Object | null): Parameter<Object>;
    static addParam(commandBuilder: CommandBuilder, block: (param0: Object | null) => Object | null): Parameter<Object>;
}