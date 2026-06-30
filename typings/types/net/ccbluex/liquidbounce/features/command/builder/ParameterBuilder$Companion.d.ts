import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Parameter$Verificator } from '../../../../../../net/ccbluex/liquidbounce/features/command/Parameter$Verificator.d.ts'
import type { ParameterBuilder } from '../../../../../../net/ccbluex/liquidbounce/features/command/builder/ParameterBuilder.d.ts'
import type { ClientModule } from '../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
export class ParameterBuilder$Companion extends Object {
    BOOLEAN_VALIDATOR: Parameter$Verificator<boolean>;
    FLOAT_VALIDATOR: Parameter$Verificator<number>;
    INTEGER_VALIDATOR: Parameter$Verificator<number>;
    MODULE_VALIDATOR: Parameter$Verificator<ClientModule>;
    NON_NEGATIVE_INTEGER_VALIDATOR: Parameter$Verificator<number>;
    POSITIVE_FLOAT_VALIDATOR: Parameter$Verificator<number>;
    POSITIVE_INTEGER_VALIDATOR: Parameter$Verificator<number>;
    STRING_VALIDATOR: Parameter$Verificator<string>;
    begin<T extends unknown>(name: string): ParameterBuilder<T>;
    floatRange(min: number, max: number): Parameter$Verificator<number>;
    intRange(min: number, max: number): Parameter$Verificator<number>;
}