import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../../net/minecraft/client/Minecraft.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { SubtitleOverlay$Subtitle } from '../../../../../net/minecraft/client/gui/components/SubtitleOverlay$Subtitle.d.ts'
import type { SoundInstance } from '../../../../../net/minecraft/client/resources/sounds/SoundInstance.d.ts'
import type { SoundEventListener } from '../../../../../net/minecraft/client/sounds/SoundEventListener.d.ts'
import type { WeighedSoundEvents } from '../../../../../net/minecraft/client/sounds/WeighedSoundEvents.d.ts'
export class SubtitleOverlay extends Object implements SoundEventListener {
    constructor(minecraft: Minecraft)
    // private audibleSubtitles: SubtitleOverlay$Subtitle[];
    // private isListening: boolean;
    // private minecraft: Minecraft;
    // private subtitles: SubtitleOverlay$Subtitle[];
    extractRenderState(graphics: GuiGraphicsExtractor): void;
    // private extractRenderState$mixinextras$wrapped$13(arg0: GuiGraphicsExtractor): void;
    // private extractRenderState$mixinextras$wrapped$15(arg0: GuiGraphicsExtractor): void;
    onPlaySound(sound: SoundInstance, soundEvent: WeighedSoundEvents, range: number): void;
}