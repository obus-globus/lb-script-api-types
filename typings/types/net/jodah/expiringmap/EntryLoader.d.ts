import type { Object } from '../../../java/lang/Object.d.ts'
export interface EntryLoader<K extends Object | number | string | boolean, V extends Object | number | string | boolean> extends Object{
    load(arg0: K): V;
}