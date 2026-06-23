import type { Class } from '../../../java/lang/Class.d.ts'
import type { Record } from '../../../java/lang/Record.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { PKCS9Attribute$Decoder } from '../../../sun/security/pkcs/PKCS9Attribute$Decoder.d.ts'
import type { PKCS9Attribute$Encoder } from '../../../sun/security/pkcs/PKCS9Attribute$Encoder.d.ts'
import type { DerOutputStream } from '../../../sun/security/util/DerOutputStream.d.ts'
import type { DerValue } from '../../../sun/security/util/DerValue.d.ts'
export class PKCS9Attribute$AttributeInfo<T extends unknown> extends Record {
    // private decoder: (param0: DerValue) => T;
    // private encoder: (param0: DerOutputStream, param1: T) => void;
    // private singleValued: boolean;
    // private valueClass: Class<Object>;
    // private valueTags: number[];
    decode(arg0: DerValue): T;
    decoder(): (param0: DerValue) => T;
    encode(arg0: Object): DerOutputStream;
    encoder(): (param0: DerOutputStream, param1: T) => void;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    singleValued(): boolean;
    toString(): string;
    valueClass(): Class<Object>;
    valueTags(): number[];
}