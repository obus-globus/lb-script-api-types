import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FabricTagAppender } from '../../../../net/fabricmc/fabric/api/datagen/v1/provider/FabricTagAppender.d.ts'
import type { TagAppender } from '../../../../net/minecraft/data/tags/TagAppender.d.ts'
export abstract class BlockItemTagAppender<Element extends unknown> extends Object implements FabricTagAppender<Object>, TagAppender<Element> {
    constructor(original: TagAppender<Element>)
}