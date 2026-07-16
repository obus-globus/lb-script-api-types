import type { Predicate } from '../../../../../../../java/util/function/Predicate.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Mode } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/Mode.d.ts'
import type { ModeValueGroup } from '../../../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { Block } from '../../../../../../../net/minecraft/world/level/block/Block.d.ts'
export class ModuleBedPlates$FilterMode extends Mode implements Predicate<Block> {
    static Companion: Tagged$Companion;
    static isEqual<T extends unknown>(paramarg0: Object): (param0: T) => boolean;
    static not<T extends unknown>(paramarg0: (param0: Object) => boolean): (param0: T) => boolean;
    protected constructor(name: string)
    readonly parent: ModeValueGroup<any>;
    and(arg0: (param0: Block) => boolean): (param0: Block) => boolean;
    negate(): (param0: Block) => boolean;
    or(arg0: (param0: Block) => boolean): (param0: Block) => boolean;
}