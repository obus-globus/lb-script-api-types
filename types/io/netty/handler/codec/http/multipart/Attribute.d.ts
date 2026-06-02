import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { HttpData } from '../../../../../../io/netty/handler/codec/http/multipart/HttpData.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface Attribute extends HttpData, Object{
    copy(): Attribute;
    duplicate(): Attribute;
    getValue(): string;
    replace(arg0: ByteBuf): Attribute;
    retain(): Attribute;
    retain(arg0: number): Attribute;
    retainedDuplicate(): Attribute;
    setValue(arg0: string): void;
    touch(): Attribute;
    touch(arg0: Object): Attribute;
}