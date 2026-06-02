import type { Object } from '../../../../java/lang/Object.d.ts'
export interface IRand extends Object{
    nextBoolean(): boolean;
    nextDouble(): number;
    nextFloat(): number;
    nextGaussian(): number;
    nextInt(): number;
    nextInt(arg0: number): number;
    nextLong(): number;
}