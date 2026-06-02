import type { Dynamic } from '../../../../../com/mojang/serialization/Dynamic.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class BlockStateData extends Object {
    static getTag(paramid: number): Dynamic<Object>;
    static upgradeBlock(paramid: number): string;
    static upgradeBlock(paramoldName: string): string;
    static upgradeBlockStateTag(paramoldTag: Dynamic<Object>): Dynamic<Object>;
    constructor()
}