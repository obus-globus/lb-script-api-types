import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Packet } from '../../../../../../net/minecraft/network/protocol/Packet.d.ts'
import type { ConfigurationTask } from '../../../../../../net/minecraft/server/network/ConfigurationTask.d.ts'
import type { ConfigurationTask$Type } from '../../../../../../net/minecraft/server/network/ConfigurationTask$Type.d.ts'
export class CustomIngredientSync$IngredientSyncTask extends Record implements ConfigurationTask {
    static KEY: ConfigurationTask$Type;
    private constructor()
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    start(arg0: (param0: Packet<Object>) => void): void;
    tick(): boolean;
    toString(): string;
    type(): ConfigurationTask$Type;
}