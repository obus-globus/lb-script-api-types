import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface RefreshableIntState extends Object{
    readonly current: number;
    refresh(): void;
}