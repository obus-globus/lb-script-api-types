import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { Holder$Reference } from '../../../../../net/minecraft/core/Holder$Reference.d.ts'
import type { RegistryAccess } from '../../../../../net/minecraft/core/RegistryAccess.d.ts'
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { PriorityProvider } from '../../../../../net/minecraft/world/entity/variant/PriorityProvider.d.ts'
import type { SpawnContext } from '../../../../../net/minecraft/world/entity/variant/SpawnContext.d.ts'
import type { ValueInput } from '../../../../../net/minecraft/world/level/storage/ValueInput.d.ts'
import type { ValueOutput } from '../../../../../net/minecraft/world/level/storage/ValueOutput.d.ts'
export class VariantUtils extends Object {
    static TAG_VARIANT: string;
    static getAny<T extends unknown>(paramregistryAccess: RegistryAccess, paramregistryId: ResourceKey<T[]>): Holder<T>;
    static getDefaultOrAny<T extends unknown>(paramregistryAccess: RegistryAccess, paramid: ResourceKey<T>): Holder<T>;
    static readVariant<T extends unknown>(paraminput: ValueInput, paramregistryId: ResourceKey<T[]>): Optional<Holder<T>>;
    static selectVariantToSpawn<T extends PriorityProvider<SpawnContext, any>>(paramcontext: SpawnContext, paramvariantRegistry: ResourceKey<T[]>): Optional<Holder$Reference<T>>;
    static writeVariant<T extends unknown>(paramoutput: ValueOutput, paramholder: Holder<T>): void;
    constructor()
}