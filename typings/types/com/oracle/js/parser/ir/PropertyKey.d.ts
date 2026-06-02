import type { TruffleString } from '../../../../../com/oracle/truffle/api/strings/TruffleString.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface PropertyKey extends Object{
    getPropertyName(): string;
    getPropertyNameTS(): TruffleString;
}