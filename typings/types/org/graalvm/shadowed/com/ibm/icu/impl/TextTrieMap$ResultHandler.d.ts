import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../../../../java/util/Iterator.d.ts'
export interface TextTrieMap$ResultHandler<V extends unknown> extends Object{
    handlePrefixMatch(matchLength: number, values: Iterator<V>): boolean;
}