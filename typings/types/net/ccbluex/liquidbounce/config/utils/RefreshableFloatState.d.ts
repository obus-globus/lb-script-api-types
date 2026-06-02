import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface RefreshableFloatState extends Object{
    readonly current: number;
    refresh(): void;
}