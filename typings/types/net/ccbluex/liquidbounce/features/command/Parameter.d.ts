import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AutoCompletionProvider } from '../../../../../net/ccbluex/liquidbounce/features/command/AutoCompletionProvider.d.ts'
import type { Command } from '../../../../../net/ccbluex/liquidbounce/features/command/Command.d.ts'
import type { Parameter$Verificator } from '../../../../../net/ccbluex/liquidbounce/features/command/Parameter$Verificator.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
export class Parameter<T extends unknown> extends Object {
    constructor(name: string, required: boolean, default_: T | null, vararg: boolean, verifier: Parameter$Verificator<T> | null, autocompletionHandler: AutoCompletionProvider | null)
    readonly autocompletionHandler: AutoCompletionProvider | null;
    command: Command | null;
    /**
     * Default value if optional.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1dd09d11a76f588ec66d4eb9c06f470b5294257e/src/main/kotlin/net/ccbluex/liquidbounce/features/command/Parameter.kt#L53 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/Parameter.kt:53}
     */
    readonly default: T | null;
    readonly description: MutableComponent;
    index: number;
    /**
     * Name of the parameter.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1dd09d11a76f588ec66d4eb9c06f470b5294257e/src/main/kotlin/net/ccbluex/liquidbounce/features/command/Parameter.kt#L49 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/Parameter.kt:49}
     */
    readonly name: string;
    /**
     * Whether the parameter is required.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1dd09d11a76f588ec66d4eb9c06f470b5294257e/src/main/kotlin/net/ccbluex/liquidbounce/features/command/Parameter.kt#L51 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/Parameter.kt:51}
     */
    readonly required: boolean;
    // private /*not mapped: */ getTranslationBaseKey(): string;
    /**
     * Whether the parameter is a vararg. Parsed result will be an Array if true.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1dd09d11a76f588ec66d4eb9c06f470b5294257e/src/main/kotlin/net/ccbluex/liquidbounce/features/command/Parameter.kt#L55 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/Parameter.kt:55}
     */
    readonly vararg: boolean;
    readonly verifier: Parameter$Verificator<T> | null;
    nameAsText(): Component;
}