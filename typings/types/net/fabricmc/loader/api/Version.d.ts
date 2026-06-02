import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../../java/lang/Comparable.d.ts'
export interface Version extends Object, Comparable<Version>{
    getFriendlyString(): string;
}