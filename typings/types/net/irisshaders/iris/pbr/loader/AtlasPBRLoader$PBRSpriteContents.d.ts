import type { NativeImage } from '../../../../../com/mojang/blaze3d/platform/NativeImage.d.ts'
import type { CustomMipmapGenerator } from '../../../../../net/irisshaders/iris/pbr/mipmap/CustomMipmapGenerator.d.ts'
import type { CustomMipmapGenerator$Provider } from '../../../../../net/irisshaders/iris/pbr/mipmap/CustomMipmapGenerator$Provider.d.ts'
import type { PBRType } from '../../../../../net/irisshaders/iris/pbr/texture/PBRType.d.ts'
import type { SpriteContents } from '../../../../../net/minecraft/client/renderer/texture/SpriteContents.d.ts'
import type { FrameSize } from '../../../../../net/minecraft/client/resources/metadata/animation/FrameSize.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ResourceMetadata } from '../../../../../net/minecraft/server/packs/resources/ResourceMetadata.d.ts'
export class AtlasPBRLoader$PBRSpriteContents extends SpriteContents implements CustomMipmapGenerator$Provider {
    static UBO_SIZE: number;
    constructor(arg0: Identifier, arg1: FrameSize, arg2: NativeImage, arg3: ResourceMetadata, arg4: PBRType)
    // private pbrType: PBRType;
    getMipmapGenerator(): CustomMipmapGenerator;
}