import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface IsolateSourceCache extends Object{
    getCachedSources(): Object[];
    release(handle: number): void;
    translate(sourceReceiver: Object): number;
    unhand(handle: number): Object;
}