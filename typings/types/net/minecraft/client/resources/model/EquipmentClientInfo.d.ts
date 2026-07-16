import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { EquipmentClientInfo$Builder } from '../../../../../net/minecraft/client/resources/model/EquipmentClientInfo$Builder.d.ts'
import type { EquipmentClientInfo$Layer } from '../../../../../net/minecraft/client/resources/model/EquipmentClientInfo$Layer.d.ts'
import type { EquipmentClientInfo$LayerType } from '../../../../../net/minecraft/client/resources/model/EquipmentClientInfo$LayerType.d.ts'
export class EquipmentClientInfo extends Record {
    static CODEC: Codec<EquipmentClientInfo>;
    static builder(): EquipmentClientInfo$Builder;
    constructor(layers: Map<EquipmentClientInfo$LayerType, EquipmentClientInfo$Layer[]>)
    // private layers: Map<EquipmentClientInfo$LayerType, EquipmentClientInfo$Layer[]>;
    equals(o: Object | null): boolean;
    getLayers(type: EquipmentClientInfo$LayerType): EquipmentClientInfo$Layer[];
    hashCode(): number;
    layers(): Map<EquipmentClientInfo$LayerType, EquipmentClientInfo$Layer[]>;
    toString(): string;
}