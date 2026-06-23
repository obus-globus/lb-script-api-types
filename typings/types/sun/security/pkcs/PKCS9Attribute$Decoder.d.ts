import type { Object } from '../../../java/lang/Object.d.ts'
import type { DerValue } from '../../../sun/security/util/DerValue.d.ts'
export interface PKCS9Attribute$Decoder<R extends unknown> extends Object{
    decode(arg0: DerValue): R;
}