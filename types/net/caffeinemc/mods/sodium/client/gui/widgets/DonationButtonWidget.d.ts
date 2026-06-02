import type { Runnable } from '../../../../../../../java/lang/Runnable.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { VideoSettingsScreen } from '../../../../../../../net/caffeinemc/mods/sodium/client/gui/VideoSettingsScreen.d.ts'
import type { FlatButtonWidget } from '../../../../../../../net/caffeinemc/mods/sodium/client/gui/widgets/FlatButtonWidget.d.ts'
export class DonationButtonWidget extends Object {
    constructor(arg0: VideoSettingsScreen, arg1: () => void, arg2: () => void)
    // private donateButtonEnabled: boolean;
    // private donateButtonText: FlatButtonWidget;
    // private hideDonateButton: FlatButtonWidget;
    getWidth(): number;
    updateDisplay(arg0: VideoSettingsScreen, arg1: boolean): void;
}