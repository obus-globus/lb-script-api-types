import type { Ops } from '../../../../../../com/viaversion/viaversion/api/minecraft/codec/Ops.d.ts'
import type { Type } from '../../../../../../com/viaversion/viaversion/api/type/Type.d.ts'
import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { BufferedImage } from '../../../../../../java/awt/image/BufferedImage.d.ts'
export class ImageType extends Type<BufferedImage> {
    static getImageData(paramarg0: BufferedImage): number[];
    constructor()
    read(arg0: ByteBuf): BufferedImage;
    write(arg0: Ops, arg1: BufferedImage): void;
    write(arg0: ByteBuf, arg1: BufferedImage): void;
}