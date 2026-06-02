import type { Object } from '../../../java/lang/Object.d.ts'
import type { DerOutputStream } from '../../../sun/security/util/DerOutputStream.d.ts'
export interface DerEncoder extends Object{
    encode(arg0: DerOutputStream): void;
}