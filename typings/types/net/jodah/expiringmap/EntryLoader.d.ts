import type { Object } from '../../../java/lang/Object.d.ts'
export interface EntryLoader<K extends unknown, V extends unknown> extends Object{
    load(arg0: K): V;
}