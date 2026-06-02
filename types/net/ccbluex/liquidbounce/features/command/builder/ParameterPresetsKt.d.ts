import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Function1 } from '../../../../../../kotlin/jvm/functions/Function1.d.ts'
import type { ParameterBuilder } from '../../../../../../net/ccbluex/liquidbounce/features/command/builder/ParameterBuilder.d.ts'
import type { ParameterBuilder$Companion } from '../../../../../../net/ccbluex/liquidbounce/features/command/builder/ParameterBuilder$Companion.d.ts'
import type { ClientModule } from '../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { Block } from '../../../../../../net/minecraft/world/level/block/Block.d.ts'
export class ParameterPresetsKt extends Object {
    static block(paramarg0: ParameterBuilder$Companion, paramarg1: string): ParameterBuilder<Block>;
    static boolean(paramarg0: ParameterBuilder$Companion, paramarg1: string): ParameterBuilder<boolean>;
    static configs(paramarg0: ParameterBuilder$Companion, paramarg1: string, paramarg2: Function1<Object, boolean>): ParameterBuilder<Object>;
    static enchantment(paramarg0: ParameterBuilder$Companion, paramarg1: string): ParameterBuilder<string>;
    static enumChoice(paramarg0: ParameterBuilder$Companion, paramarg1: string, paramarg2: Function1<Object, boolean>): ParameterBuilder<Object>;
    static enumChoices(paramarg0: ParameterBuilder$Companion, paramarg1: string, paramarg2: Function1<Object, boolean>): ParameterBuilder<Object>;
    static item(paramarg0: ParameterBuilder$Companion, paramarg1: string): ParameterBuilder<string>;
    static module(paramarg0: ParameterBuilder$Companion, paramarg1: string, paramarg2: (Object | null)[], paramarg3: Function1<Object, boolean>): ParameterBuilder<ClientModule>;
    static modules(paramarg0: ParameterBuilder$Companion, paramarg1: string, paramarg2: (Object | null)[], paramarg3: Function1<Object, boolean>): ParameterBuilder<Object>;
    static playerName(paramarg0: ParameterBuilder$Companion, paramarg1: string): ParameterBuilder<string>;
    static valueGroupKeyPath(paramarg0: ParameterBuilder$Companion, paramarg1: string): ParameterBuilder<string>;
    static valueKeyPath(paramarg0: ParameterBuilder$Companion, paramarg1: string): ParameterBuilder<string>;
    static valueType(paramarg0: ParameterBuilder$Companion, paramarg1: string): ParameterBuilder<string>;
}