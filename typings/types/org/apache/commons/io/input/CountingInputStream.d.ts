import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { ProxyInputStream } from '../../../../../org/apache/commons/io/input/ProxyInputStream.d.ts'
import type { ProxyInputStream$AbstractBuilder } from '../../../../../org/apache/commons/io/input/ProxyInputStream$AbstractBuilder.d.ts'
export class CountingInputStream extends ProxyInputStream {
    static nullInputStream(): InputStream;
    constructor(arg0: InputStream)
    constructor(arg0: InputStream, arg1: ProxyInputStream$AbstractBuilder<Object, any>)
    constructor(arg0: ProxyInputStream$AbstractBuilder<Object, any>)
    readonly count: number;
    afterRead(arg0: number): void;
    getByteCount(): number;
    getCount(): number;
    resetByteCount(): number;
    resetCount(): number;
    skip(arg0: number): number;
}