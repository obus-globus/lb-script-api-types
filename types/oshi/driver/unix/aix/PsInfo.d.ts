import type { Object } from '../../../../java/lang/Object.d.ts'
import type { AixLibc$AixLwpsInfo } from '../../../../oshi/jna/platform/unix/AixLibc$AixLwpsInfo.d.ts'
import type { AixLibc$AixPsInfo } from '../../../../oshi/jna/platform/unix/AixLibc$AixPsInfo.d.ts'
import type { Pair } from '../../../../oshi/util/tuples/Pair.d.ts'
import type { Triplet } from '../../../../oshi/util/tuples/Triplet.d.ts'
export class PsInfo extends Object {
    static queryArgsEnv(paramarg0: number, paramarg1: AixLibc$AixPsInfo): Pair<Object, Object>;
    static queryArgsEnvAddrs(paramarg0: number, paramarg1: AixLibc$AixPsInfo): Triplet<number, number, number>;
    static queryLwpsInfo(paramarg0: number, paramarg1: number): AixLibc$AixLwpsInfo;
    static queryPsInfo(paramarg0: number): AixLibc$AixPsInfo;
    private constructor()
}