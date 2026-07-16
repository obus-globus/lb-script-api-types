import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { Config } from '../../../../../../net/ccbluex/liquidbounce/config/types/Config.d.ts'
import type { Tagged } from '../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { ParameterBuilder } from '../../../../../../net/ccbluex/liquidbounce/features/command/builder/ParameterBuilder.d.ts'
import type { ParameterBuilder$Companion } from '../../../../../../net/ccbluex/liquidbounce/features/command/builder/ParameterBuilder$Companion.d.ts'
import type { ClientModule } from '../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { Block } from '../../../../../../net/minecraft/world/level/block/Block.d.ts'
export class ParameterPresetsKt extends Object {
    static block(self: ParameterBuilder$Companion, name: string): ParameterBuilder<Block>;
    static boolean(self: ParameterBuilder$Companion, name: string): ParameterBuilder<boolean>;
    static configs(self: ParameterBuilder$Companion, name: string, predicate: (param0: Config) => boolean): ParameterBuilder<Config[]>;
    static enchantment(self: ParameterBuilder$Companion, name: string): ParameterBuilder<string>;
    static enumChoice<T extends Enum<T> & Tagged>(self: ParameterBuilder$Companion, name: string, predicate: (param0: T) => boolean): ParameterBuilder<T>;
    static enumChoices<T extends Enum<T> & Tagged>(self: ParameterBuilder$Companion, name: string, predicate: (param0: T) => boolean): ParameterBuilder<T[]>;
    static item(self: ParameterBuilder$Companion, name: string): ParameterBuilder<string>;
    static module(self: ParameterBuilder$Companion, name: string, all: ClientModule[], predicate: (param0: ClientModule) => boolean): ParameterBuilder<ClientModule>;
    static modules(self: ParameterBuilder$Companion, name: string, all: ClientModule[], predicate: (param0: ClientModule) => boolean): ParameterBuilder<ClientModule[]>;
    static playerName(self: ParameterBuilder$Companion, name: string): ParameterBuilder<string>;
    static valueGroupKeyPath(self: ParameterBuilder$Companion, name: string): ParameterBuilder<string>;
    static valueKeyPath(self: ParameterBuilder$Companion, name: string): ParameterBuilder<string>;
    static valueType(self: ParameterBuilder$Companion, name: string): ParameterBuilder<string>;
}