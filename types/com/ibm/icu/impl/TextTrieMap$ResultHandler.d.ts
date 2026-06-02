import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export interface TextTrieMap$ResultHandler<V extends Object | number | string | boolean> extends Object{
    handlePrefixMatch(arg0: number, arg1: Iterator<V>): boolean;
}