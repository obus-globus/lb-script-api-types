import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
import type { NameProvider } from '../../../../../../../net/caffeinemc/mods/sodium/api/config/option/NameProvider.d.ts'
import type { ChatFormatting } from '../../../../../../../net/minecraft/ChatFormatting.d.ts'
import type { Component } from '../../../../../../../net/minecraft/network/chat/Component.d.ts'
export class OptionImpact extends Enum<OptionImpact> implements NameProvider {
    static HIGH: OptionImpact;
    static LOW: OptionImpact;
    static MEDIUM: OptionImpact;
    static VARIES: OptionImpact;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): OptionImpact;
    static values(): OptionImpact[];
    private constructor(arg2: ChatFormatting, arg3: string)
    // private text: Component;
    getName(): Component;
    name(): "LOW" | "MEDIUM" | "HIGH" | "VARIES";
}