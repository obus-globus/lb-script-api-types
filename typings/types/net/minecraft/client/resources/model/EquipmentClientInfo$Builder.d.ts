import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { EquipmentClientInfo } from '../../../../../net/minecraft/client/resources/model/EquipmentClientInfo.d.ts'
import type { EquipmentClientInfo$Layer } from '../../../../../net/minecraft/client/resources/model/EquipmentClientInfo$Layer.d.ts'
import type { EquipmentClientInfo$LayerType } from '../../../../../net/minecraft/client/resources/model/EquipmentClientInfo$LayerType.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
export class EquipmentClientInfo$Builder extends Object {
    private constructor()
    // private layersByType: { [key in EquipmentClientInfo$LayerType]: EquipmentClientInfo$Layer[] };
    addHumanoidLayers(textureId: Identifier): EquipmentClientInfo$Builder;
    addHumanoidLayers(textureId: Identifier, dyeable: boolean): EquipmentClientInfo$Builder;
    addLayers(type: EquipmentClientInfo$LayerType, layers: EquipmentClientInfo$Layer[]): EquipmentClientInfo$Builder;
    addMainHumanoidLayer(textureId: Identifier, dyeable: boolean): EquipmentClientInfo$Builder;
    build(): EquipmentClientInfo;
}