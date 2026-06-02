import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class TranscodingErrorHandler$ReplacementString extends Record {
    // private byteLength: number;
    // private replacement: TruffleString;
    byteLength(): number;
    equals(o: Object | null): boolean;
    hashCode(): number;
    replacement(): TruffleString;
    toString(): string;
}