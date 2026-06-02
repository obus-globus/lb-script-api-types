import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Quartet } from '../../../../oshi/util/tuples/Quartet.d.ts'
export class CpuInfo extends Object {
    static queryBoardInfo(): Quartet<string, string, string, string>;
    static queryCpuManufacturer(): string;
    static queryFeatureFlags(): string[];
    private constructor()
}