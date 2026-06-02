import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { AbstractMixedHttpData } from '../../../../../../io/netty/handler/codec/http/multipart/AbstractMixedHttpData.d.ts'
import type { Attribute } from '../../../../../../io/netty/handler/codec/http/multipart/Attribute.d.ts'
import type { Charset } from '../../../../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class MixedAttribute extends AbstractMixedHttpData<Attribute> implements Attribute {
    constructor(arg0: string, arg1: number)
    constructor(arg0: string, arg1: number, arg2: Charset)
    constructor(arg0: string, arg1: number, arg2: Charset, arg3: string, arg4: boolean)
    constructor(arg0: string, arg1: number, arg2: number)
    constructor(arg0: string, arg1: number, arg2: number, arg3: Charset)
    constructor(arg0: string, arg1: number, arg2: number, arg3: Charset, arg4: string, arg5: boolean)
    constructor(arg0: string, arg1: string, arg2: number)
    constructor(arg0: string, arg1: string, arg2: number, arg3: Charset)
    constructor(arg0: string, arg1: string, arg2: number, arg3: Charset, arg4: string, arg5: boolean)
    copy(): Attribute;
    duplicate(): Attribute;
    getValue(): string;
    makeDiskData(): Attribute;
    replace(arg0: ByteBuf): Attribute;
    retain(): Attribute;
    retain(arg0: number): Attribute;
    retainedDuplicate(): Attribute;
    setValue(arg0: string): void;
    touch(): Attribute;
    touch(arg0: Object): Attribute;
}