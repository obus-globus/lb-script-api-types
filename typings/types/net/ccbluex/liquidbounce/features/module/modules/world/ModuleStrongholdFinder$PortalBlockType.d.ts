import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Color4b } from '../../../../../../../net/ccbluex/liquidbounce/render/engine/type/Color4b.d.ts'
export class ModuleStrongholdFinder$PortalBlockType extends Enum<ModuleStrongholdFinder$PortalBlockType> {
    static Frame: ModuleStrongholdFinder$PortalBlockType;
    static Portal: ModuleStrongholdFinder$PortalBlockType;
    static getEntries(): ModuleStrongholdFinder$PortalBlockType[];
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ModuleStrongholdFinder$PortalBlockType;
    static values(): ModuleStrongholdFinder$PortalBlockType[];
    private constructor(color: Color4b)
    readonly color: Color4b;
    name(): "Portal" | "Frame";
}