import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Parameter$Verificator } from '../../../../../../net/ccbluex/liquidbounce/features/command/Parameter$Verificator.d.ts'
import type { ParameterBuilder } from '../../../../../../net/ccbluex/liquidbounce/features/command/builder/ParameterBuilder.d.ts'
import type { ClientModule } from '../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
export class ParameterBuilder$Companion extends Object {
    BOOLEAN_VALIDATOR: Parameter$Verificator<boolean>;
    INTEGER_VALIDATOR: Parameter$Verificator<number>;
    MODULE_VALIDATOR: Parameter$Verificator<ClientModule>;
    POSITIVE_INTEGER_VALIDATOR: Parameter$Verificator<number>;
    STRING_VALIDATOR: Parameter$Verificator<string>;
    begin(name: string): ParameterBuilder<T>;
}