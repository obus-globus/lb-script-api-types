import type { ByteBuffer } from '../../../../java/nio/ByteBuffer.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { TextureInfoCache$TextureInfo } from '../../../../net/irisshaders/iris/pbr/TextureInfoCache$TextureInfo.d.ts'
export class TextureInfoCache extends Object {
    static INSTANCE: TextureInfoCache;
    private constructor()
    // private cache: Int2ObjectMap<TextureInfoCache$TextureInfo>;
    getInfo(arg0: number): TextureInfoCache$TextureInfo;
    onDeleteTexture(arg0: number): void;
    onTexImage2D(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: ByteBuffer): void;
}