import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Parameter } from '../../../../../../net/ccbluex/liquidbounce/features/command/Parameter.d.ts'
import type { CommandBuilder } from '../../../../../../net/ccbluex/liquidbounce/features/command/builder/CommandBuilder.d.ts'
import type { ParameterBuilder } from '../../../../../../net/ccbluex/liquidbounce/features/command/builder/ParameterBuilder.d.ts'
import type { ParameterBuilder$Companion } from '../../../../../../net/ccbluex/liquidbounce/features/command/builder/ParameterBuilder$Companion.d.ts'
export class ParameterDslKt extends Object {
    static addParam<T extends unknown>(self: CommandBuilder, name: string, block: (param0: ParameterBuilder<T>) => ParameterBuilder<T>): Parameter<T>;
    static addParam<T extends unknown>(self: CommandBuilder, block: (param0: ParameterBuilder$Companion) => ParameterBuilder<T>): Parameter<T>;
}