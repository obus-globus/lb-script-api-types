import type { BooleanSupplier } from '../../../../../../java/util/function/BooleanSupplier.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { GridLayout } from '../../../../../../net/minecraft/client/gui/layouts/GridLayout.d.ts'
import type { SwitchGrid$Builder } from '../../../../../../net/minecraft/client/gui/screens/worldselection/SwitchGrid$Builder.d.ts'
import type { SwitchGrid$LabeledSwitch } from '../../../../../../net/minecraft/client/gui/screens/worldselection/SwitchGrid$LabeledSwitch.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
export class SwitchGrid$SwitchBuilder extends Object {
    private constructor(label: Component, stateSupplier: () => kotlin.Boolean, onClicked: (param0: boolean) => void, buttonWidth: number)
    // private buttonWidth: number;
    // private info: Component;
    // private isActiveCondition: () => kotlin.Boolean;
    // private label: Component;
    // private onClicked: (param0: boolean) => void;
    // private stateSupplier: () => kotlin.Boolean;
    // private build(switchGridBuilder: SwitchGrid$Builder, gridLayout: GridLayout, startColumn: number): SwitchGrid$LabeledSwitch;
    withInfo(info: Component): SwitchGrid$SwitchBuilder;
    withIsActiveCondition(isActiveCondition: () => kotlin.Boolean): SwitchGrid$SwitchBuilder;
}