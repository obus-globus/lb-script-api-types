import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Config } from '../../../../../../net/ccbluex/liquidbounce/config/types/Config.d.ts'
import type { ParameterBuilder } from '../../../../../../net/ccbluex/liquidbounce/features/command/builder/ParameterBuilder.d.ts'
import type { ParameterBuilder$Companion } from '../../../../../../net/ccbluex/liquidbounce/features/command/builder/ParameterBuilder$Companion.d.ts'
import type { ClientModule } from '../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { Block } from '../../../../../../net/minecraft/world/level/block/Block.d.ts'
export class ParameterPresetsKt extends Object {
    static block(companion: ParameterBuilder$Companion, name: string): ParameterBuilder<Block>;
    static boolean(companion: ParameterBuilder$Companion, name: string): ParameterBuilder<boolean>;
    static configs(companion: ParameterBuilder$Companion, name: string, predicate: (param0: Object) => boolean): ParameterBuilder<Config[]>;
    static enchantment(companion: ParameterBuilder$Companion, name: string): ParameterBuilder<string>;
    static enumChoice(companion: ParameterBuilder$Companion, name: string, predicate: (param0: Object) => boolean): ParameterBuilder<Object>;
    static enumChoices(companion: ParameterBuilder$Companion, name: string, predicate: (param0: Object) => boolean): ParameterBuilder<(Object | null)[]>;
    static item(companion: ParameterBuilder$Companion, name: string): ParameterBuilder<string>;
    static module(companion: ParameterBuilder$Companion, name: string, all: ClientModule[], predicate: (param0: Object) => boolean): ParameterBuilder<ClientModule>;
    static modules(companion: ParameterBuilder$Companion, name: string, all: ClientModule[], predicate: (param0: Object) => boolean): ParameterBuilder<ClientModule[]>;
    static playerName(companion: ParameterBuilder$Companion, name: string): ParameterBuilder<string>;
    static valueGroupKeyPath(companion: ParameterBuilder$Companion, name: string): ParameterBuilder<string>;
    static valueKeyPath(companion: ParameterBuilder$Companion, name: string): ParameterBuilder<string>;
    static valueType(companion: ParameterBuilder$Companion, name: string): ParameterBuilder<string>;
}