import type { OptionConvertible } from '../../../../../com/terraformersmc/modmenu/config/option/OptionConvertible.d.ts'
import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { OptionInstance } from '../../../../../net/minecraft/client/OptionInstance.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
export class EnumConfigOption<E extends Enum<E>> extends Object implements OptionConvertible {
    constructor(arg0: string, arg1: E)
    readonly defaultValue: E;
    // private enumClass: Class<E>;
    readonly key: string;
    // private translationKey: string;
    asOption(): OptionInstance<E>;
    cycleValue(): void;
    cycleValue(arg0: number): void;
    getButtonText(): Component;
    getDefaultValue(): E;
    getKey(): string;
    getValue(): E;
    setValue(arg0: E): void;
}