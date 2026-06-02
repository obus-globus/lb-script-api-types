import type { ModeValueGroup } from '../../../../../net/ccbluex/liquidbounce/config/types/group/ModeValueGroup.d.ts'
import type { ToggleableValueGroup } from '../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
import type { SpooferClient$SpoofMode } from '../../../../../net/ccbluex/liquidbounce/features/spoofer/SpooferClient$SpoofMode.d.ts'
export class SpooferClient extends ToggleableValueGroup {
    static INSTANCE: SpooferClient;
    readonly mode: ModeValueGroup<SpooferClient$SpoofMode>;
    readonly running: boolean;
    clientBrand(brand: string): string;
}