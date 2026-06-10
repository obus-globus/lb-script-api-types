import type { Record } from '../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockStateModel$UnbakedRoot } from '../../../../../net/minecraft/client/renderer/block/dispatch/BlockStateModel$UnbakedRoot.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { Property } from '../../../../../net/minecraft/world/level/block/state/properties/Property.d.ts'
export class ModelGroupCollector$GroupKey extends Record {
    static create(paramstate: BlockState, parammodel: BlockStateModel$UnbakedRoot, paramcoloringProperties: Property<Object>[]): ModelGroupCollector$GroupKey;
    private constructor(equalityGroup: Object, coloringValues: Object[])
    // private coloringValues: Object[];
    // private equalityGroup: Object;
    coloringValues(): Object[];
    equalityGroup(): Object;
    equals(o: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}