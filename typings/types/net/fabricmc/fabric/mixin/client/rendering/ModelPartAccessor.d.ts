import type { BiConsumer } from '../../../../../../java/util/function/BiConsumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { ModelPart } from '../../../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
export interface ModelPartAccessor extends Object {
    fabric$callAddAllChildren(arg0: (param0: string, param1: ModelPart) => void): void;
}