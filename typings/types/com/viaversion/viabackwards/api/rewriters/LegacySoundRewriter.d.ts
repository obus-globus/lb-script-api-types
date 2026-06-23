import type { BackwardsProtocol } from '../../../../../com/viaversion/viabackwards/api/BackwardsProtocol.d.ts'
import type { LegacySoundRewriter$SoundData } from '../../../../../com/viaversion/viabackwards/api/rewriters/LegacySoundRewriter$SoundData.d.ts'
import type { RewriterBase } from '../../../../../com/viaversion/viaversion/api/rewriter/RewriterBase.d.ts'
export abstract class LegacySoundRewriter<T extends BackwardsProtocol<any, any, any, any>> extends RewriterBase<T> {
    constructor(arg0: T)
    // private soundRewrites: { [key: string]: any };
    added(arg0: number, arg1: number): LegacySoundRewriter$SoundData;
    added(arg0: number, arg1: number, arg2: number): LegacySoundRewriter$SoundData;
    handlePitch(arg0: number): number;
    handleSounds(arg0: number): number;
    hasPitch(arg0: number): boolean;
    removed(arg0: number): LegacySoundRewriter$SoundData;
}