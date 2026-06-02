import type { JSException } from '../../../../../com/oracle/truffle/js/runtime/JSException.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class Uint8ArrayBuiltins$Uint8ArrayBaseNode$EncodeResult extends Record {
    // private bytes: number[];
    // private error: JSException;
    // private read: number;
    // private written: number;
    bytes(): number[];
    equals(o: Object | null): boolean;
    error(): JSException;
    hashCode(): number;
    read(): number;
    toString(): string;
    written(): number;
}