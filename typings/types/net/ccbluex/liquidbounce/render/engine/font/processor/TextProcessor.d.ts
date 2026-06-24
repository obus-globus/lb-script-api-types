import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { ProcessedText } from '../../../../../../../net/ccbluex/liquidbounce/render/engine/font/processor/ProcessedText.d.ts'
import type { TextProcessor$Companion } from '../../../../../../../net/ccbluex/liquidbounce/render/engine/font/processor/TextProcessor$Companion.d.ts'
import type { Color4b } from '../../../../../../../net/ccbluex/liquidbounce/render/engine/type/Color4b.d.ts'
import type { Component } from '../../../../../../../net/minecraft/network/chat/Component.d.ts'
export abstract class TextProcessor<T extends ProcessedText> extends Object {
    static Companion: TextProcessor$Companion;
    /**
     * Contains the chars for the `§k` formatting
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/render/engine/font/processor/TextProcessor.kt#L46 | src/main/kotlin/net/ccbluex/liquidbounce/render/engine/font/processor/TextProcessor.kt:46}
     */
    static RANDOM_CHARS: string[];
    static getHexColors(): (Object | null)[];
    constructor()
    /**
     * @param defaultColor The color all chars are drawn when no style is specified from Minecraft formatting
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/render/engine/font/processor/TextProcessor.kt#L28 | src/main/kotlin/net/ccbluex/liquidbounce/render/engine/font/processor/TextProcessor.kt:28}
     */
    process(text: Component, defaultColor: Color4b): T;
}