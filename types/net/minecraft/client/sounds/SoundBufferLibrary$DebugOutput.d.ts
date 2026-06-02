import type { AudioFormat } from '../../../../javax/sound/sampled/AudioFormat.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../../net/minecraft/resources/Identifier.d.ts'
export interface SoundBufferLibrary$DebugOutput extends Object{
    accountBuffer(id: Identifier, size: number, format: AudioFormat): void;
}