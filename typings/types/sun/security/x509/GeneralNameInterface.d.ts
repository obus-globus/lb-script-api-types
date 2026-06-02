import type { Object } from '../../../java/lang/Object.d.ts'
import type { DerEncoder } from '../../../sun/security/util/DerEncoder.d.ts'
export interface GeneralNameInterface extends Object, DerEncoder{
    constrains(arg0: GeneralNameInterface): number;
    getType(): number;
    subtreeDepth(): number;
}