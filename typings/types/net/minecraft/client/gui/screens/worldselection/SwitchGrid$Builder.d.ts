import type { Optional } from '../../../../../../java/util/Optional.d.ts'
import type { BooleanSupplier } from '../../../../../../java/util/function/BooleanSupplier.d.ts'
import type { Consumer } from '../../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { SwitchGrid } from '../../../../../../net/minecraft/client/gui/screens/worldselection/SwitchGrid.d.ts'
import type { SwitchGrid$InfoUnderneathSettings } from '../../../../../../net/minecraft/client/gui/screens/worldselection/SwitchGrid$InfoUnderneathSettings.d.ts'
import type { SwitchGrid$SwitchBuilder } from '../../../../../../net/minecraft/client/gui/screens/worldselection/SwitchGrid$SwitchBuilder.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
export class SwitchGrid$Builder extends Object {
    constructor(width: number)
    // private infoUnderneath: Optional<SwitchGrid$InfoUnderneathSettings>;
    // private paddingLeft: number;
    // private rowCount: number;
    // private rowSpacing: number;
    // private switchBuilders: SwitchGrid$SwitchBuilder[];
    // private width: number;
    addSwitch(label: Component, stateSupplier: () => boolean, onClicked: (param0: boolean) => void): SwitchGrid$SwitchBuilder;
    build(): SwitchGrid;
    // private increaseRow(): void;
    withInfoUnderneath(maxRows: number, alwaysMaxHeight: boolean): SwitchGrid$Builder;
    withPaddingLeft(paddingLeft: number): SwitchGrid$Builder;
    withRowSpacing(rowSpacing: number): SwitchGrid$Builder;
}