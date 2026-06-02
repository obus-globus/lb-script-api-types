import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { EquipmentClientInfo$Layer } from '../../../../../../net/minecraft/client/resources/model/EquipmentClientInfo$Layer.d.ts'
import type { EquipmentClientInfo$LayerType } from '../../../../../../net/minecraft/client/resources/model/EquipmentClientInfo$LayerType.d.ts'
export class EquipmentLayerRenderer$LayerTextureKey extends Record {
    private constructor(layerType: EquipmentClientInfo$LayerType, layer: EquipmentClientInfo$Layer)
    // private layer: EquipmentClientInfo$Layer;
    // private layerType: EquipmentClientInfo$LayerType;
    equals(o: Object | null): boolean;
    hashCode(): number;
    layer(): EquipmentClientInfo$Layer;
    layerType(): EquipmentClientInfo$LayerType;
    toString(): string;
}