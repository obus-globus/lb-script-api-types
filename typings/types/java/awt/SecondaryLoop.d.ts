import type { Object } from '../../java/lang/Object.d.ts'
export interface SecondaryLoop extends Object{
    enter(): boolean;
    exit(): boolean;
}