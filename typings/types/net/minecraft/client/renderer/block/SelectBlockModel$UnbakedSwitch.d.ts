import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { SelectBlockModel$SwitchCase } from '../../../../../net/minecraft/client/renderer/block/SelectBlockModel$SwitchCase.d.ts'
import type { BlockModel } from '../../../../../net/minecraft/client/renderer/block/model/BlockModel.d.ts'
import type { BlockModel$BakingContext } from '../../../../../net/minecraft/client/renderer/block/model/BlockModel$BakingContext.d.ts'
import type { SelectBlockModelProperty } from '../../../../../net/minecraft/client/renderer/block/model/properties/select/SelectBlockModelProperty.d.ts'
import type { Matrix4fc } from '../../../../../org/joml/Matrix4fc.d.ts'
export class SelectBlockModel$UnbakedSwitch<P extends SelectBlockModelProperty<T>, T extends Object | number | string | boolean> extends Record {
    constructor(property: P, cases: SelectBlockModel$SwitchCase<T>[])
    // private cases: SelectBlockModel$SwitchCase<T>[];
    // private property: P;
    bake(context: BlockModel$BakingContext, transformation: Matrix4fc, fallback: BlockModel): BlockModel;
    cases(): SelectBlockModel$SwitchCase<T>[];
    equals(o: Object | null): boolean;
    hashCode(): number;
    property(): P;
    toString(): string;
}