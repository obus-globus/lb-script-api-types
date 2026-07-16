import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { Color4b } from '../../../../../../../net/ccbluex/liquidbounce/render/engine/type/Color4b.d.ts'
export class ModuleStrongholdFinder$PortalBlockType extends Enum<ModuleStrongholdFinder$PortalBlockType> {
    static Frame: ModuleStrongholdFinder$PortalBlockType;
    static Portal: ModuleStrongholdFinder$PortalBlockType;
    static getEntries(): ModuleStrongholdFinder$PortalBlockType[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): ModuleStrongholdFinder$PortalBlockType;
    static values(): ModuleStrongholdFinder$PortalBlockType[];
    private constructor(color: Color4b)
    readonly color: Color4b;
    name(): "Portal" | "Frame";
}