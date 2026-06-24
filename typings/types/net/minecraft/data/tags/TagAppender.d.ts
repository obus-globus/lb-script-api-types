import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FabricTagAppender } from '../../../../net/fabricmc/fabric/api/datagen/v1/provider/FabricTagAppender.d.ts'
import type { TagAppenderMixin } from '../../../../net/fabricmc/fabric/mixin/datagen/TagAppenderMixin.d.ts'
export interface TagAppender<T extends unknown> extends Object, FabricTagAppender<T>, TagAppenderMixin<Object>{
}