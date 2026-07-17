import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Pair } from '../../../../oshi/util/tuples/Pair.d.ts'
export class Ls extends Object {
    static queryDeviceMajorMinor(): JavaMap<string, Pair<number, number>>;
    private constructor()
}