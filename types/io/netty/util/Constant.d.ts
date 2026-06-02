import type { Object } from '../../../java/lang/Object.d.ts'
import type { Comparable } from '../../../java/lang/Comparable.d.ts'
export interface Constant<T extends Constant<T>> extends Object, Comparable<T>{
    id(): number;
    name(): string;
}