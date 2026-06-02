import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../../../java/util/Iterator.d.ts'
export interface Handshakedata extends Object{
    getContent(): number[];
    getFieldValue(arg0: string): string;
    hasFieldValue(arg0: string): boolean;
    iterateHttpFields(): Iterator<string>;
}