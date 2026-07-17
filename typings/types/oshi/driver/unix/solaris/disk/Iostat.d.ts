import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Quintet } from '../../../../../oshi/util/tuples/Quintet.d.ts'
export class Iostat extends Object {
    static queryDeviceStrings(paramarg0: string[]): JavaMap<string, Quintet<string, string, string, string, number>>;
    static queryPartitionToMountMap(): JavaMap<string, string>;
    private constructor()
}