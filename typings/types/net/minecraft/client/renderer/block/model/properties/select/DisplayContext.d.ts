import type { Record } from '../../../../../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { BlockDisplayContext } from '../../../../../../../../net/minecraft/client/renderer/block/model/BlockDisplayContext.d.ts'
import type { SelectBlockModelProperty } from '../../../../../../../../net/minecraft/client/renderer/block/model/properties/select/SelectBlockModelProperty.d.ts'
import type { BlockState } from '../../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
export class DisplayContext extends Record implements SelectBlockModelProperty<BlockDisplayContext> {
    constructor()
    equals(o: Object | null): boolean;
    get(blockState: BlockState, displayContext: BlockDisplayContext): BlockDisplayContext;
    hashCode(): number;
    toString(): string;
}