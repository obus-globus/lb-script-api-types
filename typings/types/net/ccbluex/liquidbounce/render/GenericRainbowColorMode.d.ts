import type { Object } from '../../../../java/lang/Object.d.ts'
import type { ModeValueGroup } from '../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { Tagged$Companion } from '../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { GenericColorMode } from '../../../../net/ccbluex/liquidbounce/render/GenericColorMode.d.ts'
import type { Color4b } from '../../../../net/ccbluex/liquidbounce/render/engine/type/Color4b.d.ts'
export class GenericRainbowColorMode extends GenericColorMode<Object> {
    static Companion: Tagged$Companion;
    constructor(parent: ModeValueGroup<any>, alpha: number)
    // private alpha: number;
    // private isParamSensitive: boolean;
    /*not mapped: */ isParamSensitive(): boolean;
    readonly parent: ModeValueGroup<any>;
    getParent(): ModeValueGroup<any>;
    getColor(param: Object | null): Color4b;
}