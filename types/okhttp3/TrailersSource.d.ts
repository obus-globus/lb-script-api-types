import type { Object } from '../java/lang/Object.d.ts'
import type { Pair } from '../kotlin/Pair.d.ts'
export interface TrailersSource extends Object{
    get(): Pair<string, string>[];
    peek(): Pair<string, string>[] | null;
}