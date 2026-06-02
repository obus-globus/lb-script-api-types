import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { PBRTextureLoader$PBRTextureConsumer } from '../../../../../net/irisshaders/iris/pbr/loader/PBRTextureLoader$PBRTextureConsumer.d.ts'
import type { PBRTextureHolder } from '../../../../../net/irisshaders/iris/pbr/texture/PBRTextureHolder.d.ts'
import type { AbstractTexture } from '../../../../../net/minecraft/client/renderer/texture/AbstractTexture.d.ts'
export class PBRTextureManager$PBRTextureConsumerImpl extends Object implements PBRTextureLoader$PBRTextureConsumer {
    private constructor(null_: PBRTextureManager$PBRTextureConsumerImpl)
    // private changed: boolean;
    // private normalTexture: AbstractTexture;
    // private specularTexture: AbstractTexture;
    acceptNormalTexture(arg0: AbstractTexture): void;
    acceptSpecularTexture(arg0: AbstractTexture): void;
    clear(): void;
    toHolder(): PBRTextureHolder;
}