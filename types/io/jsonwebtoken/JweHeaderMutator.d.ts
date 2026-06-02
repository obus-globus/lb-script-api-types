import type { ProtectedHeaderMutator } from '../../io/jsonwebtoken/ProtectedHeaderMutator.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface JweHeaderMutator<T extends JweHeaderMutator<T>> extends ProtectedHeaderMutator<T>, Object{
    agreementPartyUInfo(arg0: number[]): T;
    agreementPartyUInfo(arg0: string): T;
    agreementPartyVInfo(arg0: number[]): T;
    agreementPartyVInfo(arg0: string): T;
    pbes2Count(arg0: number): T;
}