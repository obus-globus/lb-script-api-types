import type { Object } from '../../../java/lang/Object.d.ts'
import type { CefChannelLayout } from '../../../org/cef/misc/CefChannelLayout.d.ts'
export class CefAudioParameters extends Object {
    constructor(arg0: CefChannelLayout, arg1: number, arg2: number)
    channelLayout: CefChannelLayout;
    framesPerBuffer: number;
    sampleRate: number;
}