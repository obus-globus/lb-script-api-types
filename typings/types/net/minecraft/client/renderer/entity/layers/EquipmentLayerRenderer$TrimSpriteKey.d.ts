import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { EquipmentClientInfo$LayerType } from '../../../../../../net/minecraft/client/resources/model/EquipmentClientInfo$LayerType.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ResourceKey } from '../../../../../../net/minecraft/resources/ResourceKey.d.ts'
import type { EquipmentAsset } from '../../../../../../net/minecraft/world/item/equipment/EquipmentAsset.d.ts'
import type { ArmorTrim } from '../../../../../../net/minecraft/world/item/equipment/trim/ArmorTrim.d.ts'
export class EquipmentLayerRenderer$TrimSpriteKey extends Record {
    private constructor(trim: ArmorTrim, layerType: EquipmentClientInfo$LayerType, equipmentAssetId: ResourceKey<EquipmentAsset>)
    // private equipmentAssetId: ResourceKey<EquipmentAsset>;
    // private layerType: EquipmentClientInfo$LayerType;
    // private trim: ArmorTrim;
    equals(o: Object | null): boolean;
    equipmentAssetId(): ResourceKey<EquipmentAsset>;
    hashCode(): number;
    layerType(): EquipmentClientInfo$LayerType;
    spriteId(): Identifier;
    toString(): string;
    trim(): ArmorTrim;
}