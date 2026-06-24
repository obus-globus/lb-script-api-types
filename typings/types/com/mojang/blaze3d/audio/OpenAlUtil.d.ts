import type { AudioFormat } from '../../../../javax/sound/sampled/AudioFormat.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class OpenAlUtil extends Object {
    static audioFormatToOpenAl(paramaudioFormat: AudioFormat): number;
    static checkALCError(paramdevice: number, paramlocation: string): boolean;
    static checkALError(paramlocation: string): boolean;
    constructor()
}