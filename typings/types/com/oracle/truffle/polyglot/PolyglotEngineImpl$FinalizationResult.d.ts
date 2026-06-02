import type { DispatchOutputStream } from '../../../../com/oracle/truffle/api/impl/DispatchOutputStream.d.ts'
import type { InputStream } from '../../../../java/io/InputStream.d.ts'
import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class PolyglotEngineImpl$FinalizationResult extends Record {
    constructor(out: DispatchOutputStream, err: DispatchOutputStream, in_: InputStream)
    // private err: DispatchOutputStream;
    // private in: InputStream;
    // private out: DispatchOutputStream;
    equals(o: Object | null): boolean;
    err(): DispatchOutputStream;
    hashCode(): number;
    in(): InputStream;
    out(): DispatchOutputStream;
    toString(): string;
}