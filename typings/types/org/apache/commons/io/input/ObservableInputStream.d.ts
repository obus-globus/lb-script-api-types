import type { IOException } from '../../../../../java/io/IOException.d.ts'
import type { InputStream } from '../../../../../java/io/InputStream.d.ts'
import type { IOConsumer } from '../../../../../org/apache/commons/io/function/IOConsumer.d.ts'
import type { ObservableInputStream$AbstractBuilder } from '../../../../../org/apache/commons/io/input/ObservableInputStream$AbstractBuilder.d.ts'
import type { ObservableInputStream$Observer } from '../../../../../org/apache/commons/io/input/ObservableInputStream$Observer.d.ts'
import type { ProxyInputStream } from '../../../../../org/apache/commons/io/input/ProxyInputStream.d.ts'
export class ObservableInputStream extends ProxyInputStream {
    static nullInputStream(): InputStream;
    constructor(arg0: InputStream)
    constructor(arg0: InputStream, arg1: ObservableInputStream$Observer[])
    private constructor(arg0: InputStream, arg1: ObservableInputStream$Observer[])
    constructor(arg0: ObservableInputStream$AbstractBuilder<any>)
    readonly observers: ObservableInputStream$Observer[];
    add(arg0: ObservableInputStream$Observer): void;
    close(): void;
    consume(): void;
    // private forEachObserver(arg0: (param0: ObservableInputStream$Observer) => void): void;
    getObservers(): ObservableInputStream$Observer[];
    noteClosed(): void;
    noteDataByte(arg0: number): void;
    noteDataBytes(arg0: number[], arg1: number, arg2: number): void;
    noteError(arg0: IOException): void;
    noteFinished(): void;
    // private notify(arg0: number[], arg1: number, arg2: number, arg3: IOException): void;
    read(): number;
    read(arg0: number[]): number;
    read(arg0: number[], arg1: number, arg2: number): number;
    remove(arg0: ObservableInputStream$Observer): void;
    removeAllObservers(): void;
}