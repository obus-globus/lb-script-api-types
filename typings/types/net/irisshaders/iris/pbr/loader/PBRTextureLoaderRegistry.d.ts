import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { PBRTextureLoader } from '../../../../../net/irisshaders/iris/pbr/loader/PBRTextureLoader.d.ts'
export class PBRTextureLoaderRegistry extends Object {
    static INSTANCE: PBRTextureLoaderRegistry;
    constructor()
    // private loaderMap: Map<Class<Object>, PBRTextureLoader<Object>>;
    getLoader(arg0: Class<T>): PBRTextureLoader<T>;
    register(arg0: Class<T>, arg1: PBRTextureLoader<T>): void;
}