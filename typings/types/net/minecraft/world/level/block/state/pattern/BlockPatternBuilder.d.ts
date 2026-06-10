import type { Predicate } from '../../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { BlockInWorld } from '../../../../../../../net/minecraft/world/level/block/state/pattern/BlockInWorld.d.ts'
import type { BlockPattern } from '../../../../../../../net/minecraft/world/level/block/state/pattern/BlockPattern.d.ts'
export class BlockPatternBuilder extends Object {
    static start(): BlockPatternBuilder;
    private constructor()
    // private height: number;
    // private lookup: { [key: string]: (param0: BlockInWorld) => boolean };
    // private pattern: string[][];
    // private unknownCharacters: (Object | null)[];
    // private width: number;
    aisle(aisle: string[]): BlockPatternBuilder;
    build(): BlockPattern;
    // private createPattern(): (param0: BlockInWorld) => boolean[][][];
    where(character: string, predicate: (param0: BlockInWorld) => boolean): BlockPatternBuilder;
}