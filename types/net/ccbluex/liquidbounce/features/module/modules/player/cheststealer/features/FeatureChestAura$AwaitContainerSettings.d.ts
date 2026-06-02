import type { ToggleableValueGroup } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/group/ToggleableValueGroup.d.ts'
export class FeatureChestAura$AwaitContainerSettings extends ToggleableValueGroup {
    static INSTANCE: FeatureChestAura$AwaitContainerSettings;
    readonly maxInteractionRetries: number;
    readonly retryTimeout: number;
}