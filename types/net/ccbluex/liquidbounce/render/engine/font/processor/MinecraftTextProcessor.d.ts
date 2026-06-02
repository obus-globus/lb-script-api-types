import type { Optional } from '../../../../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Random } from '../../../../../../../kotlin/random/Random.d.ts'
import type { Pool } from '../../../../../../../net/ccbluex/fastutil/Pool.d.ts'
import type { MinecraftTextProcessor$RecyclingProcessedText } from '../../../../../../../net/ccbluex/liquidbounce/render/engine/font/processor/MinecraftTextProcessor$RecyclingProcessedText.d.ts'
import type { TextProcessor } from '../../../../../../../net/ccbluex/liquidbounce/render/engine/font/processor/TextProcessor.d.ts'
import type { TextProcessor$Companion } from '../../../../../../../net/ccbluex/liquidbounce/render/engine/font/processor/TextProcessor$Companion.d.ts'
import type { Color4b } from '../../../../../../../net/ccbluex/liquidbounce/render/engine/type/Color4b.d.ts'
import type { Component } from '../../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Style } from '../../../../../../../net/minecraft/network/chat/Style.d.ts'
export class MinecraftTextProcessor extends TextProcessor<MinecraftTextProcessor$RecyclingProcessedText> {
    static Companion: TextProcessor$Companion;
    static INSTANCE: MinecraftTextProcessor;
    static RANDOM_CHARS: string[];
    static TEXT_POOL: Pool<MinecraftTextProcessor$RecyclingProcessedText>;
    static getHexColors(): (Object | null)[];
    TEXT_POOL: Pool<MinecraftTextProcessor$RecyclingProcessedText>;
    // private defaultRng: Random;
    process(text: Component, defaultColor: Color4b): MinecraftTextProcessor$RecyclingProcessedText;
    // private visit(style: Style, textAsString: string, defaultColor: Color4b, result: MinecraftTextProcessor$RecyclingProcessedText): Optional<void>;
}