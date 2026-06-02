import type { BackwardsProtocol } from '../../../../../com/viaversion/viabackwards/api/BackwardsProtocol.d.ts'
import type { LegacySoundRewriter$SoundData } from '../../../../../com/viaversion/viabackwards/api/rewriters/LegacySoundRewriter$SoundData.d.ts'
import type { RewriterBase } from '../../../../../com/viaversion/viaversion/api/rewriter/RewriterBase.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class LegacySoundRewriter<T extends BackwardsProtocol<Object, Object, Object, Object>> extends RewriterBase<T> {
    constructor(arg0: T)
    // private soundRewrites: Int2ObjectMap<LegacySoundRewriter$SoundData>;
    added(arg0: number, arg1: number): LegacySoundRewriter$SoundData;
    added(arg0: number, arg1: number, arg2: number): LegacySoundRewriter$SoundData;
    handlePitch(arg0: number): number;
    handleSounds(arg0: number): number;
    hasPitch(arg0: number): boolean;
    removed(arg0: number): LegacySoundRewriter$SoundData;
}