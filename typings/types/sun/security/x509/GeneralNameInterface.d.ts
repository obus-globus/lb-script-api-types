import type { Object } from '../../../java/lang/Object.d.ts'
import type { DerEncoder } from '../../../sun/security/util/DerEncoder.d.ts'
import type { DerOutputStream } from '../../../sun/security/util/DerOutputStream.d.ts'
export interface GeneralNameInterface extends Object, DerEncoder{
    constrains(arg0: GeneralNameInterface): number;
    encode(arg0: DerOutputStream): void;
    getType(): number;
    subtreeDepth(): number;
}