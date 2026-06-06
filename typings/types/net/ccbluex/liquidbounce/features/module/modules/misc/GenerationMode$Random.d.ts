import type { IntStream } from '../../../../../../../java/util/stream/IntStream.d.ts'
import type { Tagged$Companion } from '../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { GenerationMode } from '../../../../../../../net/ccbluex/liquidbounce/features/module/modules/misc/GenerationMode.d.ts'
export class GenerationMode$Random extends GenerationMode {
    static Companion: Tagged$Companion;
    static INSTANCE: GenerationMode$Random;
    // private allowSpace: boolean;
    // private /*not mapped: */ getAllowSpace(): boolean;
    // private asciiOnly: boolean;
    // private /*not mapped: */ getAsciiOnly(): boolean;
    /**
     * @source <a href="https://github.com/MeteorDevelopment/meteor-client/blob/2025789457e5b4c0671f04f0d3c7e0d91a31765c/src/main/java/meteordevelopment/meteorclient/systems/modules/misc/BookBot.java#L201-L209">code section</a>
     * @contributor sqlerrorthing (<a href="https://github.com/CCBlueX/LiquidBounce/pull/5076">pull request</a>)
     *
     * @author arlomcwalter (on Meteor Client)
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/ModuleBookBot.kt#L293 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/ModuleBookBot.kt:293}
     */
    generate(): IntStream;
}