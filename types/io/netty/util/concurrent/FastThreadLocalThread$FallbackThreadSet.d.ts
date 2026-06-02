import type { LongLongHashMap } from '../../../../io/netty/util/internal/LongLongHashMap.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class FastThreadLocalThread$FallbackThreadSet extends Object {
    private constructor()
    private constructor(arg0: LongLongHashMap)
    // private map: LongLongHashMap;
    add(arg0: number): FastThreadLocalThread$FallbackThreadSet;
    contains(arg0: number): boolean;
    remove(arg0: number): FastThreadLocalThread$FallbackThreadSet;
}