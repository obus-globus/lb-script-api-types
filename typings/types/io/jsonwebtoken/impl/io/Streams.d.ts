import type { Flushable } from '../../../../java/io/Flushable.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { OutputStream } from '../../../../java/io/OutputStream.d.ts'
import type { Reader } from '../../../../java/io/Reader.d.ts'
import type { Callable } from '../../../../java/util/concurrent/Callable.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharSequence } from '../../../../java/lang/CharSequence.d.ts'
export class Streams extends Object {
    static EOF: number;
    static bytes(paramarg0: InputStream, paramarg1: string): number[];
    static copy(paramarg0: InputStream, paramarg1: OutputStream, paramarg2: number[]): number;
    static copy(paramarg0: InputStream, paramarg1: OutputStream, paramarg2: number[], paramarg3: string): number;
    static flush(...paramarg0: Flushable[]): void;
    static of(paramarg0: number[]): InputStream;
    static of(paramarg0: CharSequence): InputStream;
    static reader(paramarg0: number[]): Reader;
    static reader(paramarg0: InputStream): Reader;
    static reader(paramarg0: CharSequence): Reader;
    static reset(paramarg0: InputStream): void;
    static run<V extends unknown>(paramarg0: () => V, paramarg1: string): V;
    static write(paramarg0: OutputStream, paramarg1: number[], paramarg2: number, paramarg3: number, paramarg4: string): void;
    static write(paramarg0: OutputStream, paramarg1: number[], paramarg2: string): void;
    static writeAndClose(paramarg0: OutputStream, paramarg1: number[], paramarg2: string): void;
    constructor()
}