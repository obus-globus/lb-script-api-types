import type { Consumer } from '../../../../../java/util/function/Consumer.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { OptionInstance } from '../../../../../net/minecraft/client/OptionInstance.d.ts'
import type { OptionInstance$CaptionBasedToString } from '../../../../../net/minecraft/client/OptionInstance$CaptionBasedToString.d.ts'
import type { OptionInstance$Enum } from '../../../../../net/minecraft/client/OptionInstance$Enum.d.ts'
import type { OptionInstance$TooltipSupplier } from '../../../../../net/minecraft/client/OptionInstance$TooltipSupplier.d.ts'
import type { OptionInstance$ValueSet } from '../../../../../net/minecraft/client/OptionInstance$ValueSet.d.ts'
import type { Options } from '../../../../../net/minecraft/client/Options.d.ts'
import type { AbstractWidget } from '../../../../../net/minecraft/client/gui/components/AbstractWidget.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
export class ShadowDistanceOption<T extends Object | number | string | boolean> extends OptionInstance<T> {
    static BOOLEAN_TO_STRING: OptionInstance$CaptionBasedToString<boolean>;
    static BOOLEAN_VALUES: OptionInstance$Enum<boolean>;
    static cachedConstantTooltip(paramtooltipComponent: Component): (param0: Object | null) => net.minecraft.client.gui.components.Tooltip;
    static createBoolean(paramcaptionId: string, paraminitialValue: boolean): OptionInstance<boolean>;
    static createBoolean(paramcaptionId: string, paraminitialValue: boolean, paramonValueUpdate: (param0: boolean) => void): OptionInstance<boolean>;
    static createBoolean(paramcaptionId: string, paramtooltip: (param0: boolean) => net.minecraft.client.gui.components.Tooltip, paraminitialValue: boolean): OptionInstance<boolean>;
    static createBoolean(paramcaptionId: string, paramtooltip: (param0: boolean) => net.minecraft.client.gui.components.Tooltip, paraminitialValue: boolean, paramonValueUpdate: (param0: boolean) => void): OptionInstance<boolean>;
    static createBoolean(paramcaptionId: string, paramtooltip: (param0: boolean) => net.minecraft.client.gui.components.Tooltip, paramtoString: OptionInstance$CaptionBasedToString<boolean>, paraminitialValue: boolean, paramonValueUpdate: (param0: boolean) => void): OptionInstance<boolean>;
    static noTooltip(): (param0: Object | null) => net.minecraft.client.gui.components.Tooltip;
    constructor(arg0: string, arg1: (param0: T) => net.minecraft.client.gui.components.Tooltip, arg2: OptionInstance$CaptionBasedToString<T>, arg3: OptionInstance$ValueSet<T>, arg4: T, arg5: (param0: T) => void)
    createButton(options: Options): AbstractWidget;
    createButton(arg0: Options, arg1: number, arg2: number, arg3: number): AbstractWidget;
    createButton(options: Options, x: number, y: number, width: number, onValueChanged: (param0: T) => void): AbstractWidget;
}