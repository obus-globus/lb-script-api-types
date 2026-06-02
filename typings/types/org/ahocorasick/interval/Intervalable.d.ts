import type { Object } from '../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../java/lang/Comparable.d.ts'
export interface Intervalable extends Object, Comparable<Object>{
    getEnd(): number;
    getStart(): number;
    size(): number;
}