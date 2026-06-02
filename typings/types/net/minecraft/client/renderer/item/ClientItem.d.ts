import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ClientItem$Properties } from '../../../../../net/minecraft/client/renderer/item/ClientItem$Properties.d.ts'
import type { ItemModel$Unbaked } from '../../../../../net/minecraft/client/renderer/item/ItemModel$Unbaked.d.ts'
import type { RegistryContextSwapper } from '../../../../../net/minecraft/util/RegistryContextSwapper.d.ts'
export class ClientItem extends Record {
    static CODEC: Codec<ClientItem>;
    constructor(model: ItemModel$Unbaked, properties: ClientItem$Properties)
    constructor(model: ItemModel$Unbaked, properties: ClientItem$Properties, registrySwapper: RegistryContextSwapper)
    // private model: ItemModel$Unbaked;
    // private properties: ClientItem$Properties;
    // private registrySwapper: RegistryContextSwapper;
    equals(o: Object | null): boolean;
    hashCode(): number;
    model(): ItemModel$Unbaked;
    properties(): ClientItem$Properties;
    registrySwapper(): RegistryContextSwapper;
    toString(): string;
    withRegistrySwapper(registrySwapper: RegistryContextSwapper): ClientItem;
}