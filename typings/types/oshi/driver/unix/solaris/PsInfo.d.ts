import type { Object } from '../../../../java/lang/Object.d.ts'
import type { SolarisLibc$SolarisLwpsInfo } from '../../../../oshi/jna/platform/unix/SolarisLibc$SolarisLwpsInfo.d.ts'
import type { SolarisLibc$SolarisPrUsage } from '../../../../oshi/jna/platform/unix/SolarisLibc$SolarisPrUsage.d.ts'
import type { SolarisLibc$SolarisPsInfo } from '../../../../oshi/jna/platform/unix/SolarisLibc$SolarisPsInfo.d.ts'
import type { Pair } from '../../../../oshi/util/tuples/Pair.d.ts'
import type { Quartet } from '../../../../oshi/util/tuples/Quartet.d.ts'
export class PsInfo extends Object {
    static queryArgsEnv(paramarg0: number, paramarg1: SolarisLibc$SolarisPsInfo): Pair<string[], { [key: string]: string }>;
    static queryArgsEnvAddrs(paramarg0: number, paramarg1: SolarisLibc$SolarisPsInfo): Quartet<number, number, number, number>;
    static queryLwpsInfo(paramarg0: number, paramarg1: number): SolarisLibc$SolarisLwpsInfo;
    static queryPrUsage(paramarg0: number): SolarisLibc$SolarisPrUsage;
    static queryPrUsage(paramarg0: number, paramarg1: number): SolarisLibc$SolarisPrUsage;
    static queryPsInfo(paramarg0: number): SolarisLibc$SolarisPsInfo;
    private constructor()
}