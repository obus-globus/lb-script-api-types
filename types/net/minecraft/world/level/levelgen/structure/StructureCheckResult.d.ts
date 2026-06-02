import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class StructureCheckResult extends Enum<StructureCheckResult> {
    static CHUNK_LOAD_NEEDED: StructureCheckResult;
    static START_NOT_PRESENT: StructureCheckResult;
    static START_PRESENT: StructureCheckResult;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): StructureCheckResult;
    static values(): (Object | null)[];
    private constructor()
    name(): "START_PRESENT" | "START_NOT_PRESENT" | "CHUNK_LOAD_NEEDED";
}