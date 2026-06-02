import type { Object } from '../../java/lang/Object.d.ts'
export interface StateTracker extends Object{
    isCurrent(): boolean;
}