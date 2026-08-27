import type { Object } from '../../../java/lang/Object.d.ts'
export interface ResourceRecord extends Object{
    readonly name: string;
    readonly timeToLive: number;
}