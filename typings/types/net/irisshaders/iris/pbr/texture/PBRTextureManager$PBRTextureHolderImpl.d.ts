import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { PBRTextureHolder } from '../../../../../net/irisshaders/iris/pbr/texture/PBRTextureHolder.d.ts'
import type { AbstractTexture } from '../../../../../net/minecraft/client/renderer/texture/AbstractTexture.d.ts'
export class PBRTextureManager$PBRTextureHolderImpl extends Record implements PBRTextureHolder {
    private constructor(normalTexture: AbstractTexture, specularTexture: AbstractTexture)
    // private normalTexture: AbstractTexture;
    // private specularTexture: AbstractTexture;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    normalTexture(): AbstractTexture;
    specularTexture(): AbstractTexture;
    toString(): string;
}