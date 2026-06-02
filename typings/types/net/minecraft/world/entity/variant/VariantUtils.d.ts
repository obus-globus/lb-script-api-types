import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { RegistryAccess } from '../../../../../net/minecraft/core/RegistryAccess.d.ts'
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { SpawnContext } from '../../../../../net/minecraft/world/entity/variant/SpawnContext.d.ts'
import type { ValueInput } from '../../../../../net/minecraft/world/level/storage/ValueInput.d.ts'
import type { ValueOutput } from '../../../../../net/minecraft/world/level/storage/ValueOutput.d.ts'
export class VariantUtils extends Object {
    static TAG_VARIANT: string;
    static getAny(paramregistryAccess: RegistryAccess, paramregistryId: ResourceKey<Object>): Holder<Object>;
    static getDefaultOrAny(paramregistryAccess: RegistryAccess, paramid: ResourceKey<Object>): Holder<Object>;
    static readVariant(paraminput: ValueInput, paramregistryId: ResourceKey<Object>): Optional<Object>;
    static selectVariantToSpawn(paramcontext: SpawnContext, paramvariantRegistry: ResourceKey<Object>): Optional<Object>;
    static writeVariant(paramoutput: ValueOutput, paramholder: Holder<Object>): void;
    constructor()
}