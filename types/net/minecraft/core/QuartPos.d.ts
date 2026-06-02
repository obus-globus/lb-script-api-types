import type { Object } from '../../../java/lang/Object.d.ts'
export class QuartPos extends Object {
    static BITS: number;
    static MASK: number;
    static SIZE: number;
    static fromBlock(paramblockCoord: number): number;
    static fromSection(paramsection: number): number;
    static quartLocal(paramblockCoord: number): number;
    static toBlock(paramquart: number): number;
    static toSection(paramquart: number): number;
    private constructor()
}