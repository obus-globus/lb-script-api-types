import type { Codec } from '../../../../../../com/mojang/serialization/Codec.d.ts'
import type { Record } from '../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ClientAsset$ResourceTexture } from '../../../../../../net/minecraft/core/ClientAsset$ResourceTexture.d.ts'
export class WolfVariant$AssetInfo extends Record {
    static CODEC: Codec<WolfVariant$AssetInfo>;
    constructor(wild: ClientAsset$ResourceTexture, tame: ClientAsset$ResourceTexture, angry: ClientAsset$ResourceTexture)
    // private angry: ClientAsset$ResourceTexture;
    // private tame: ClientAsset$ResourceTexture;
    // private wild: ClientAsset$ResourceTexture;
    angry(): ClientAsset$ResourceTexture;
    equals(o: Object | null): boolean;
    hashCode(): number;
    tame(): ClientAsset$ResourceTexture;
    toString(): string;
    wild(): ClientAsset$ResourceTexture;
}