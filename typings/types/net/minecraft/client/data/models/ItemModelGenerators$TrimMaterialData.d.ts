import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ResourceKey } from '../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { MaterialAssetGroup } from '../../../../../net/minecraft/world/item/equipment/trim/MaterialAssetGroup.d.ts'
import type { TrimMaterial } from '../../../../../net/minecraft/world/item/equipment/trim/TrimMaterial.d.ts'
export class ItemModelGenerators$TrimMaterialData extends Record {
    constructor(assets: MaterialAssetGroup, materialKey: ResourceKey<TrimMaterial>)
    // private assets: MaterialAssetGroup;
    // private materialKey: ResourceKey<TrimMaterial>;
    assets(): MaterialAssetGroup;
    equals(o: Object | null): boolean;
    hashCode(): number;
    materialKey(): ResourceKey<TrimMaterial>;
    toString(): string;
}