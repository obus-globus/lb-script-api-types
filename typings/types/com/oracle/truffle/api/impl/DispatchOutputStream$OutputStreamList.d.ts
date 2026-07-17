import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { DispatchOutputStream } from '../../../../../com/oracle/truffle/api/impl/DispatchOutputStream.d.ts'
import type { OutputStream } from '../../../../../java/io/OutputStream.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../../java/lang/Throwable.d.ts'
export class DispatchOutputStream$OutputStreamList extends Object {
    constructor(null_: DispatchOutputStream)
    // private outs: OutputStream[];
    // private reportedExceptions: JavaMap<OutputStream, string>;
    // private seenException: boolean;
    add(outConsumer: OutputStream): void;
    closeMulti(): void;
    flushMulti(): void;
    // private handleException(method: string, os: OutputStream, t: Throwable): void;
    isEmpty(): boolean;
    remove(outConsumer: OutputStream): void;
    writeMulti(b: number[]): void;
    writeMulti(b: number[], off: number, len: number): void;
    writeMulti(b: number): void;
}