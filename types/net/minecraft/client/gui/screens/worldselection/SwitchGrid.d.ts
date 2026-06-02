import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Layout } from '../../../../../../net/minecraft/client/gui/layouts/Layout.d.ts'
import type { SwitchGrid$Builder } from '../../../../../../net/minecraft/client/gui/screens/worldselection/SwitchGrid$Builder.d.ts'
import type { SwitchGrid$LabeledSwitch } from '../../../../../../net/minecraft/client/gui/screens/worldselection/SwitchGrid$LabeledSwitch.d.ts'
export class SwitchGrid extends Object {
    static builder(paramwidth: number): SwitchGrid$Builder;
    private constructor(switches: SwitchGrid$LabeledSwitch[], layout: Layout)
    // private layout: Layout;
    // private switches: SwitchGrid$LabeledSwitch[];
    layout(): Layout;
    refreshStates(): void;
}