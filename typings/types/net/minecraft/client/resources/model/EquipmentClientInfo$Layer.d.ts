import type { Codec } from '../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Optional } from '../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { EquipmentClientInfo$Dyeable } from '../../../../../net/minecraft/client/resources/model/EquipmentClientInfo$Dyeable.d.ts'
import type { EquipmentClientInfo$LayerType } from '../../../../../net/minecraft/client/resources/model/EquipmentClientInfo$LayerType.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
export class EquipmentClientInfo$Layer extends Record {
    static CODEC: Codec<EquipmentClientInfo$Layer>;
    static leatherDyeable(paramtextureId: Identifier, paramdyeable: boolean): EquipmentClientInfo$Layer;
    static onlyIfDyed(paramtextureId: Identifier, paramdyeable: boolean): EquipmentClientInfo$Layer;
    // private dyeable: Optional<EquipmentClientInfo$Dyeable>;
    // private textureId: Identifier;
    // private usePlayerTexture: boolean;
    dyeable(): Optional<EquipmentClientInfo$Dyeable>;
    equals(o: Object | null): boolean;
    getTextureLocation(type: EquipmentClientInfo$LayerType): Identifier;
    hashCode(): number;
    textureId(): Identifier;
    toString(): string;
    usePlayerTexture(): boolean;
}