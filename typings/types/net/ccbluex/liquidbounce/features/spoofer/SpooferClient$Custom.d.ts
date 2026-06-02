import type { Tagged$Companion } from '../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { SpooferClient$SpoofMode } from '../../../../../net/ccbluex/liquidbounce/features/spoofer/SpooferClient$SpoofMode.d.ts'
export class SpooferClient$Custom extends SpooferClient$SpoofMode {
    static Companion: Tagged$Companion;
    static INSTANCE: SpooferClient$Custom;
    readonly brandName: string;
    getBrand(): string;
}