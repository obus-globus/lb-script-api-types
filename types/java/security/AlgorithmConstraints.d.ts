import type { AlgorithmParameters } from '../../java/security/AlgorithmParameters.d.ts'
import type { CryptoPrimitive } from '../../java/security/CryptoPrimitive.d.ts'
import type { Key } from '../../java/security/Key.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface AlgorithmConstraints extends Object{
    permits(arg0: CryptoPrimitive[], arg1: Key): boolean;
    permits(arg0: CryptoPrimitive[], arg1: string, arg2: AlgorithmParameters): boolean;
    permits(arg0: CryptoPrimitive[], arg1: string, arg2: Key, arg3: AlgorithmParameters): boolean;
}