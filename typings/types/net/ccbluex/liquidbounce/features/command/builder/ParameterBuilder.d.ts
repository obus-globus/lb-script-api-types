import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { AutoCompletionProvider } from '../../../../../../net/ccbluex/liquidbounce/features/command/AutoCompletionProvider.d.ts'
import type { Parameter } from '../../../../../../net/ccbluex/liquidbounce/features/command/Parameter.d.ts'
import type { Parameter$Verificator } from '../../../../../../net/ccbluex/liquidbounce/features/command/Parameter$Verificator.d.ts'
import type { ParameterBuilder$Companion } from '../../../../../../net/ccbluex/liquidbounce/features/command/builder/ParameterBuilder$Companion.d.ts'
import type { ClientModule } from '../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
export class ParameterBuilder<T extends unknown> extends Object {
    static BOOLEAN_VALIDATOR: Parameter$Verificator<boolean>;
    static Companion: ParameterBuilder$Companion;
    static INTEGER_VALIDATOR: Parameter$Verificator<number>;
    static MODULE_VALIDATOR: Parameter$Verificator<ClientModule>;
    static POSITIVE_INTEGER_VALIDATOR: Parameter$Verificator<number>;
    static STRING_VALIDATOR: Parameter$Verificator<string>;
    static begin(name: string): ParameterBuilder<Object>;
    private constructor(name: string)
    // private autocompletionHandler: AutoCompletionProvider | null;
    // private default: T | null;
    readonly name: string;
    // private required: boolean | null;
    // private vararg: boolean;
    // private verifier: Parameter$Verificator<T> | null;
    /**
     * Filter from given strings provided by {@link placeholdersProvider}.
     *
     * If {@link minecraftPlaceholders} is `true`, the prefix `minecraft:` will be ignored,
     * meaning that typing the beginning like `diam` (without the prefix `minecraft:`)
     * will be enough to match strings such as `minecraft:diamond`, `minecraft:diamond_axe`, etc.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/command/builder/ParameterBuilder.kt#L106 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/builder/ParameterBuilder.kt:106}
     */
    autocompletedFrom(ignoreCase: boolean, minecraftPlaceholders: boolean, placeholdersProvider: () => string[] | null): ParameterBuilder<T>;
    autocompletedWith(autocompletionHandler: AutoCompletionProvider): ParameterBuilder<T>;
    build(): Parameter<T>;
    optional(default_: T | null): ParameterBuilder<T>;
    required(): ParameterBuilder<T>;
    /**
     * Marks this parameter as a vararg.
     *
     * The values are stored in an array
     *
     * Only allowed at the end.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/command/builder/ParameterBuilder.kt#L87 | src/main/kotlin/net/ccbluex/liquidbounce/features/command/builder/ParameterBuilder.kt:87}
     */
    vararg(): ParameterBuilder<T>;
    verifiedBy(verifier: Parameter$Verificator<T>): ParameterBuilder<T>;
}