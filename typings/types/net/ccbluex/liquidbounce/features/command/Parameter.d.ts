import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AutoCompletionProvider } from '../../../../../net/ccbluex/liquidbounce/features/command/AutoCompletionProvider.d.ts'
import type { Command } from '../../../../../net/ccbluex/liquidbounce/features/command/Command.d.ts'
import type { Parameter$Verificator } from '../../../../../net/ccbluex/liquidbounce/features/command/Parameter$Verificator.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
export class Parameter<T extends Object | number | string | boolean> extends Object {
    constructor(name: string, required: boolean, default_: T | null, vararg: boolean, verifier: Parameter$Verificator<T> | null, autocompletionHandler: AutoCompletionProvider | null)
    readonly autocompletionHandler: AutoCompletionProvider | null;
    command: Command | null;
    /**
     * Default value if optional.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/command/Parameter.kt#L52 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/Parameter.kt:52}
     */
    readonly default: T | null;
    readonly description: MutableComponent;
    index: number;
    /**
     * Name of the parameter.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/command/Parameter.kt#L48 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/Parameter.kt:48}
     */
    readonly name: string;
    /**
     * Whether the parameter is required.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/command/Parameter.kt#L50 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/Parameter.kt:50}
     */
    readonly required: boolean;
    // private /*not mapped: */ getTranslationBaseKey(): string;
    /**
     * Whether the parameter is a vararg. Parsed result will be an Array if true.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/command/Parameter.kt#L54 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/Parameter.kt:54}
     */
    readonly vararg: boolean;
    readonly verifier: Parameter$Verificator<T> | null;
    nameAsText(): Component;
}