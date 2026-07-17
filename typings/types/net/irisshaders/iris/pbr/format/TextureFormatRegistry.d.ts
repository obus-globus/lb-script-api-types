import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { TextureFormat$Factory } from '../../../../../net/irisshaders/iris/pbr/format/TextureFormat$Factory.d.ts'
export class TextureFormatRegistry extends Object {
    static INSTANCE: TextureFormatRegistry;
    constructor()
    // private factoryMap: JavaMap<string, TextureFormat$Factory>;
    getFactory(arg0: string): TextureFormat$Factory;
    register(arg0: string, arg1: TextureFormat$Factory): void;
}