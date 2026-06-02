import type { ByteBuf } from '../../../../../../io/netty/buffer/ByteBuf.d.ts'
import type { AbstractDiskHttpData } from '../../../../../../io/netty/handler/codec/http/multipart/AbstractDiskHttpData.d.ts'
import type { Attribute } from '../../../../../../io/netty/handler/codec/http/multipart/Attribute.d.ts'
import type { InterfaceHttpData } from '../../../../../../io/netty/handler/codec/http/multipart/InterfaceHttpData.d.ts'
import type { InterfaceHttpData$HttpDataType } from '../../../../../../io/netty/handler/codec/http/multipart/InterfaceHttpData$HttpDataType.d.ts'
import type { Charset } from '../../../../../../java/nio/charset/Charset.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class DiskAttribute extends AbstractDiskHttpData implements Attribute {
    static baseDirectory: string;
    static deleteOnExitTemporaryFile: boolean;
    static postfix: string;
    static prefix: string;
    constructor(arg0: string)
    constructor(arg0: string, arg1: Charset)
    constructor(arg0: string, arg1: Charset, arg2: string, arg3: boolean)
    constructor(arg0: string, arg1: number)
    constructor(arg0: string, arg1: number, arg2: Charset)
    constructor(arg0: string, arg1: number, arg2: Charset, arg3: string, arg4: boolean)
    constructor(arg0: string, arg1: number, arg2: string, arg3: boolean)
    constructor(arg0: string, arg1: string)
    constructor(arg0: string, arg1: string, arg2: Charset)
    constructor(arg0: string, arg1: string, arg2: Charset, arg3: string, arg4: boolean)
    constructor(arg0: string, arg1: string, arg2: boolean)
    // private baseDir: string;
    // private deleteOnExit: boolean;
    addContent(arg0: ByteBuf, arg1: boolean): void;
    compareTo(arg0: Attribute): number;
    compareTo(arg0: InterfaceHttpData): number;
    copy(): Attribute;
    deleteOnExit(): boolean;
    duplicate(): Attribute;
    equals(arg0: Object | null): boolean;
    getBaseDirectory(): string;
    getDiskFilename(): string;
    getHttpDataType(): InterfaceHttpData$HttpDataType;
    getPostfix(): string;
    getPrefix(): string;
    getValue(): string;
    hashCode(): number;
    replace(arg0: ByteBuf): Attribute;
    retain(): Attribute;
    retain(arg0: number): Attribute;
    retainedDuplicate(): Attribute;
    setValue(arg0: string): void;
    toString(): string;
    touch(): Attribute;
    touch(arg0: Object): Attribute;
}