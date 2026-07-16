import type { Codec } from '../../../com/mojang/serialization/Codec.d.ts'
import type { Function } from '../../../java/util/function/Function.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { OptionInstance$CaptionBasedToString } from '../../../net/minecraft/client/OptionInstance$CaptionBasedToString.d.ts'
import type { OptionInstance$Enum } from '../../../net/minecraft/client/OptionInstance$Enum.d.ts'
import type { OptionInstance$TooltipSupplier } from '../../../net/minecraft/client/OptionInstance$TooltipSupplier.d.ts'
import type { OptionInstance$ValueSet } from '../../../net/minecraft/client/OptionInstance$ValueSet.d.ts'
import type { OptionInstance$ValueUpdateListener } from '../../../net/minecraft/client/OptionInstance$ValueUpdateListener.d.ts'
import type { Options } from '../../../net/minecraft/client/Options.d.ts'
import type { AbstractWidget } from '../../../net/minecraft/client/gui/components/AbstractWidget.d.ts'
import type { Tooltip } from '../../../net/minecraft/client/gui/components/Tooltip.d.ts'
import type { Component } from '../../../net/minecraft/network/chat/Component.d.ts'
export class OptionInstance<T extends unknown> extends Object {
    static BOOLEAN_TO_STRING: (param0: Component, param1: boolean) => Component;
    static BOOLEAN_VALUES: OptionInstance$Enum<boolean>;
    static NO_ACTION: (param0: Object) => void;
    static cachedConstantTooltip<T extends unknown>(paramtooltipComponent: Component): (param0: T) => Tooltip;
    static createBoolean(paramcaptionId: string, paraminitialValue: boolean): OptionInstance<boolean>;
    static createBoolean(paramcaptionId: string, paraminitialValue: boolean, paramonValueUpdate: (param0: Object) => void): OptionInstance<boolean>;
    static createBoolean(paramcaptionId: string, paramtooltip: (param0: boolean) => Tooltip, paraminitialValue: boolean): OptionInstance<boolean>;
    static createBoolean(paramcaptionId: string, paramtooltip: (param0: boolean) => Tooltip, paraminitialValue: boolean, paramonValueUpdate: (param0: Object) => void): OptionInstance<boolean>;
    static createBoolean(paramcaptionId: string, paramtooltip: (param0: boolean) => Tooltip, paramtoString: (param0: Component, param1: boolean) => Component, paraminitialValue: boolean, paramonValueUpdate: (param0: Object) => void): OptionInstance<boolean>;
    static noTooltip<T extends unknown>(): (param0: T) => Tooltip;
    constructor(captionId: string, tooltip: (param0: T) => Tooltip, toString: (param0: Component, param1: T) => Component, values: OptionInstance$ValueSet<T>, initialValue: T, onValueUpdate: (param0: T) => void)
    constructor(captionId: string, tooltip: (param0: T) => Tooltip, toString: (param0: Component, param1: T) => Component, values: OptionInstance$ValueSet<T>, codec: Codec<T>, initialValue: T, onValueUpdate: (param0: T) => void)
    // private caption: Component;
    // private codec: Codec<T>;
    // private initialValue: T;
    // private onValueUpdate: (param0: T) => void;
    // private toString: (param0: T) => Component;
    // private tooltip: (param0: T) => Tooltip;
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