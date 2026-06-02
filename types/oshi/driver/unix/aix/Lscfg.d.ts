import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Pair } from '../../../../oshi/util/tuples/Pair.d.ts'
import type { Triplet } from '../../../../oshi/util/tuples/Triplet.d.ts'
export class Lscfg extends Object {
    static queryAllDevices(): string[];
    static queryBackplaneModelSerialVersion(paramarg0: string[]): Triplet<string, string, string>;
    static queryModelSerial(paramarg0: string): Pair<string, string>;
    private constructor()
}