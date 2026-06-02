import type { Model } from '../../../../../../net/minecraft/client/model/Model.d.ts'
import type { ModelPart } from '../../../../../../net/minecraft/client/model/geom/ModelPart.d.ts'
import type { LayerDefinition } from '../../../../../../net/minecraft/client/model/geom/builders/LayerDefinition.d.ts'
import type { BookModel$State } from '../../../../../../net/minecraft/client/model/object/book/BookModel$State.d.ts'
export class BookModel extends Model<BookModel$State> {
    static createBodyLayer(): LayerDefinition;
    constructor(root: ModelPart)
    // private flipPage1: ModelPart;
    // private flipPage2: ModelPart;
    // private leftLid: ModelPart;
    // private leftPages: ModelPart;
    // private rightLid: ModelPart;
    // private rightPages: ModelPart;
    setupAnim(state: BookModel$State): void;
}