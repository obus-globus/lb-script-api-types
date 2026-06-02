import type { OptionConvertible } from '../../../../../com/terraformersmc/modmenu/config/option/OptionConvertible.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { OptionInstance } from '../../../../../net/minecraft/client/OptionInstance.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
export class BooleanConfigOption extends Object implements OptionConvertible {
    constructor(arg0: string, arg1: boolean)
    constructor(arg0: string, arg1: boolean, arg2: string, arg3: string)
    readonly defaultValue: boolean;
    // private disabledText: Component;
    // private enabledText: Component;
    readonly key: string;
    // private translationKey: string;
    asOption(): OptionInstance<boolean>;
    getButtonText(): Component;
    getDefaultValue(): boolean;
    getKey(): string;
    getValue(): boolean;
    setValue(arg0: boolean): void;
    toggleValue(): void;
}