import type { MapCodec } from '../../../../../../com/mojang/serialization/MapCodec.d.ts'
import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { StreamCodec } from '../../../../../../net/minecraft/network/codec/StreamCodec.d.ts'
import type { ResourceKey } from '../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { EquipmentAsset } from '../../../../../../net/minecraft/world/item/equipment/EquipmentAsset.d.ts'
import type { MaterialAssetGroup$AssetInfo } from '../../../../../../net/minecraft/world/item/equipment/trim/MaterialAssetGroup$AssetInfo.d.ts'
export class MaterialAssetGroup extends Record {
    static AMETHYST: MaterialAssetGroup;
    static COPPER: MaterialAssetGroup;
    static DIAMOND: MaterialAssetGroup;
    static EMERALD: MaterialAssetGroup;
    static GOLD: MaterialAssetGroup;
    static IRON: MaterialAssetGroup;
    static LAPIS: MaterialAssetGroup;
    static MAP_CODEC: MapCodec<MaterialAssetGroup>;
    static NETHERITE: MaterialAssetGroup;
    static QUARTZ: MaterialAssetGroup;
    static REDSTONE: MaterialAssetGroup;
    static RESIN: MaterialAssetGroup;
    static SEPARATOR: string;
    static STREAM_CODEC: StreamCodec<ByteBuf, MaterialAssetGroup>;
    static create(parambase: string): MaterialAssetGroup;
    static create(parambase: string, paramoverrides: Map<Object | null, string>): MaterialAssetGroup;
    constructor(base: MaterialAssetGroup$AssetInfo, overrides: Map<ResourceKey<EquipmentAsset>, MaterialAssetGroup$AssetInfo>)
    // private base: MaterialAssetGroup$AssetInfo;
    // private overrides: Map<ResourceKey<EquipmentAsset>, MaterialAssetGroup$AssetInfo>;
    assetId(equipmentAssetId: ResourceKey<EquipmentAsset>): MaterialAssetGroup$AssetInfo;
    base(): MaterialAssetGroup$AssetInfo;
    equals(o: Object | null): boolean;
    hashCode(): number;
    overrides(): Map<ResourceKey<EquipmentAsset>, MaterialAssetGroup$AssetInfo>;
    toString(): string;
}