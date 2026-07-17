import type { JavaMap } from '../../../JavaMap.d.ts'
import type { Model } from '../../../ai/djl/Model.d.ts'
import type { Block } from '../../../ai/djl/nn/Block.d.ts'
import type { BlockFactory } from '../../../ai/djl/nn/BlockFactory.d.ts'
import type { Path } from '../../../java/nio/file/Path.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export class OnesBlockFactory extends Object implements BlockFactory {
    constructor()
    newBlock(arg0: Model, arg1: Path, arg2: JavaMap<string, Object | null>): Block;
}