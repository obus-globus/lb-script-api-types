import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { PBRTextureLoader } from '../../../../../net/irisshaders/iris/pbr/loader/PBRTextureLoader.d.ts'
import type { AbstractTexture } from '../../../../../net/minecraft/client/renderer/texture/AbstractTexture.d.ts'
export class PBRTextureLoaderRegistry extends Object {
    static INSTANCE: PBRTextureLoaderRegistry;
    constructor()
    // private loaderMap: Map<Class<Object>, PBRTextureLoader<Object>>;
    getLoader<T extends AbstractTexture>(arg0: Class<T>): PBRTextureLoader<T>;
    register<T extends AbstractTexture>(arg0: Class<T>, arg1: PBRTextureLoader<T>): void;
}