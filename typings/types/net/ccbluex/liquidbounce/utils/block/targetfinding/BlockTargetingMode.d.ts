import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class BlockTargetingMode extends Enum<BlockTargetingMode> {
    static PLACE_AT_NEIGHBOR: BlockTargetingMode;
    static REPLACE_EXISTING_BLOCK: BlockTargetingMode;
    static getEntries(): BlockTargetingMode[];
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): BlockTargetingMode;
    static values(): BlockTargetingMode[];
    private constructor()
    name(): "PLACE_AT_NEIGHBOR" | "REPLACE_EXISTING_BLOCK";
}