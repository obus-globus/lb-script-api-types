import type { Codec } from '../../../com/mojang/serialization/Codec.d.ts'
import type { Consumer } from '../../../java/util/function/Consumer.d.ts'
import type { Function } from '../../../java/util/function/Function.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { OptionInstance$CaptionBasedToString } from '../../../net/minecraft/client/OptionInstance$CaptionBasedToString.d.ts'
import type { OptionInstance$Enum } from '../../../net/minecraft/client/OptionInstance$Enum.d.ts'
import type { OptionInstance$TooltipSupplier } from '../../../net/minecraft/client/OptionInstance$TooltipSupplier.d.ts'
import type { OptionInstance$ValueSet } from '../../../net/minecraft/client/OptionInstance$ValueSet.d.ts'
import type { Options } from '../../../net/minecraft/client/Options.d.ts'
import type { AbstractWidget } from '../../../net/minecraft/client/gui/components/AbstractWidget.d.ts'
import type { Component } from '../../../net/minecraft/network/chat/Component.d.ts'
export class OptionInstance<T extends Object | number | string | boolean> extends Object {
    static BOOLEAN_TO_STRING: OptionInstance$CaptionBasedToString<boolean>;
    static BOOLEAN_VALUES: OptionInstance$Enum<boolean>;
    static cachedConstantTooltip(paramtooltipComponent: Component): (param0: Object | null) => net.minecraft.client.gui.components.Tooltip;
    static createBoolean(paramcaptionId: string, paraminitialValue: boolean): OptionInstance<boolean>;
    static createBoolean(paramcaptionId: string, paraminitialValue: boolean, paramonValueUpdate: (param0: boolean) => void): OptionInstance<boolean>;
    static createBoolean(paramcaptionId: string, paramtooltip: (param0: boolean) => net.minecraft.client.gui.components.Tooltip, paraminitialValue: boolean): OptionInstance<boolean>;
    static createBoolean(paramcaptionId: string, paramtooltip: (param0: boolean) => net.minecraft.client.gui.components.Tooltip, paraminitialValue: boolean, paramonValueUpdate: (param0: boolean) => void): OptionInstance<boolean>;
    static createBoolean(paramcaptionId: string, paramtooltip: (param0: boolean) => net.minecraft.client.gui.components.Tooltip, paramtoString: OptionInstance$CaptionBasedToString<boolean>, paraminitialValue: boolean, paramonValueUpdate: (param0: boolean) => void): OptionInstance<boolean>;
    static noTooltip(): (param0: Object | null) => net.minecraft.client.gui.components.Tooltip;
    constructor(captionId: string, tooltip: (param0: T) => net.minecraft.client.gui.components.Tooltip, toString: OptionInstance$CaptionBasedToString<T>, values: OptionInstance$ValueSet<T>, initialValue: T, onValueUpdate: (param0: T) => void)
    constructor(captionId: string, tooltip: (param0: T) => net.minecraft.client.gui.components.Tooltip, toString: OptionInstance$CaptionBasedToString<T>, values: OptionInstance$ValueSet<T>, codec: Codec<T>, initialValue: T, onValueUpdate: (param0: T) => void)
    // private caption: Component;
    // private codec: Codec<T>;
    // private initialValue: T;
    // private onValueUpdate: (param0: T) => void;
    // private toString: (param0: T) => Component;
    // private tooltip: (param0: T) => net.minecraft.client.gui.components.Tooltip;
    // private value: T;
    // private values: OptionInstance$ValueSet<T>;
    codec(): Codec<T>;
    createButton(options: Options): AbstractWidget;
    createButton(options: Options, x: number, y: number, width: number): AbstractWidget;
    createButton(options: Options, x: number, y: number, width: number, onValueChanged: (param0: T) => void): AbstractWidget;
    get(): T;
    set(value: T): void;
    toString(): string;
    values(): OptionInstance$ValueSet<T>;
}