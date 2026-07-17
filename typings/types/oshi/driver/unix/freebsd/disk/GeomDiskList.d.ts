import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Triplet } from '../../../../../oshi/util/tuples/Triplet.d.ts'
export class GeomDiskList extends Object {
    static queryDisks(): JavaMap<string, Triplet<string, string, number>>;
    private constructor()
}