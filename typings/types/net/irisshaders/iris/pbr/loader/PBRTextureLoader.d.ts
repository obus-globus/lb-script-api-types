import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { PBRTextureLoader$PBRTextureConsumer } from '../../../../../net/irisshaders/iris/pbr/loader/PBRTextureLoader$PBRTextureConsumer.d.ts'
import type { AbstractTexture } from '../../../../../net/minecraft/client/renderer/texture/AbstractTexture.d.ts'
import type { ResourceManager } from '../../../../../net/minecraft/server/packs/resources/ResourceManager.d.ts'
export interface PBRTextureLoader<T extends AbstractTexture> extends Object{
    load(arg0: T, arg1: ResourceManager, arg2: PBRTextureLoader$PBRTextureConsumer): void;
}