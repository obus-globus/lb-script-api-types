import type { JavaMap } from '../../../../JavaMap.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Pair } from '../../../../oshi/util/tuples/Pair.d.ts'
export class Lssrad extends Object {
    static queryNodesPackages(): JavaMap<number, Pair<number, number>>;
    private constructor()
}