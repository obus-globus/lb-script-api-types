import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class RealmsClient$CompatibleVersionResponse extends Enum<RealmsClient$CompatibleVersionResponse> {
    static COMPATIBLE: RealmsClient$CompatibleVersionResponse;
    static OTHER: RealmsClient$CompatibleVersionResponse;
    static OUTDATED: RealmsClient$CompatibleVersionResponse;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): RealmsClient$CompatibleVersionResponse;
    static values(): RealmsClient$CompatibleVersionResponse[];
    private constructor()
    name(): "COMPATIBLE" | "OUTDATED" | "OTHER";
}