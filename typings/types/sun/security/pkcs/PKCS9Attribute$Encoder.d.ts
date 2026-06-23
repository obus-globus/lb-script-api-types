import type { Object } from '../../../java/lang/Object.d.ts'
import type { DerOutputStream } from '../../../sun/security/util/DerOutputStream.d.ts'
export interface PKCS9Attribute$Encoder<R extends unknown> extends Object{
    encode(arg0: DerOutputStream, arg1: R): void;
}