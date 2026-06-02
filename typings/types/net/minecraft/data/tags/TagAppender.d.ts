import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FabricTagAppender } from '../../../../net/fabricmc/fabric/api/datagen/v1/provider/FabricTagAppender.d.ts'
import type { TagAppenderMixin } from '../../../../net/fabricmc/fabric/mixin/datagen/TagAppenderMixin.d.ts'
export interface TagAppender<E extends Object | number | string | boolean, T extends Object | number | string | boolean> extends Object, FabricTagAppender<E, T>, TagAppenderMixin<Object, Object>{
}