import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
export class LevelLoadingScreen$Reason extends Enum<LevelLoadingScreen$Reason> {
    static END_PORTAL: LevelLoadingScreen$Reason;
    static NETHER_PORTAL: LevelLoadingScreen$Reason;
    static OTHER: LevelLoadingScreen$Reason;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): LevelLoadingScreen$Reason;
    static values(): LevelLoadingScreen$Reason[];
    private constructor()
    name(): "NETHER_PORTAL" | "END_PORTAL" | "OTHER";
}