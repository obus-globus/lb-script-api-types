import type { ByteOrderMark } from '../../../../../org/apache/commons/io/ByteOrderMark.d.ts'
import type { BOMInputStream } from '../../../../../org/apache/commons/io/input/BOMInputStream.d.ts'
import type { ProxyInputStream$AbstractBuilder } from '../../../../../org/apache/commons/io/input/ProxyInputStream$AbstractBuilder.d.ts'
export class BOMInputStream$Builder extends ProxyInputStream$AbstractBuilder<BOMInputStream, BOMInputStream$Builder> {
    constructor()
    // private byteOrderMarks: ByteOrderMark[];
    // private include: boolean;
    get(): BOMInputStream;
    setByteOrderMarks(arg0: ByteOrderMark[]): BOMInputStream$Builder;
    setInclude(arg0: boolean): BOMInputStream$Builder;
}