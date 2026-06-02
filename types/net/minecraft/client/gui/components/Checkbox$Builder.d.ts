import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { OptionInstance } from '../../../../../net/minecraft/client/OptionInstance.d.ts'
import type { Font } from '../../../../../net/minecraft/client/gui/Font.d.ts'
import type { Checkbox } from '../../../../../net/minecraft/client/gui/components/Checkbox.d.ts'
import type { Checkbox$OnValueChange } from '../../../../../net/minecraft/client/gui/components/Checkbox$OnValueChange.d.ts'
import type { Tooltip } from '../../../../../net/minecraft/client/gui/components/Tooltip.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
export class Checkbox$Builder extends Object {
    private constructor(message: Component, font: Font)
    // private font: Font;
    // private maxWidth: number;
    // private message: Component;
    // private onValueChange: Checkbox$OnValueChange;
    // private option: OptionInstance<boolean>;
    // private selected: boolean;
    // private tooltip: Tooltip;
    // private x: number;
    // private y: number;
    build(): Checkbox;
    maxWidth(maxWidth: number): Checkbox$Builder;
    onValueChange(onValueChange: Checkbox$OnValueChange): Checkbox$Builder;
    pos(x: number, y: number): Checkbox$Builder;
    selected(selected: boolean): Checkbox$Builder;
    selected(option: OptionInstance<boolean>): Checkbox$Builder;
    tooltip(tooltip: Tooltip): Checkbox$Builder;
}