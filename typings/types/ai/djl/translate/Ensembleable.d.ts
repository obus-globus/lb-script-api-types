import type { Object } from '../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../java/util/Iterator.d.ts'
export interface Ensembleable<T extends unknown> extends Object{
    ensembleWith(arg0: Iterator<T>): T;
}