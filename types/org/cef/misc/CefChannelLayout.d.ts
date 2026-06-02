import type { Class } from '../../../java/lang/Class.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Enum } from '../../../java/lang/Enum.d.ts'
export class CefChannelLayout extends Enum<CefChannelLayout> {
    static CEF_CHANNEL_LAYOUT_2POINT1: CefChannelLayout;
    static CEF_CHANNEL_LAYOUT_2_1: CefChannelLayout;
    static CEF_CHANNEL_LAYOUT_2_2: CefChannelLayout;
    static CEF_CHANNEL_LAYOUT_3_1: CefChannelLayout;
    static CEF_CHANNEL_LAYOUT_4_0: CefChannelLayout;
    static CEF_CHANNEL_LAYOUT_4_1: CefChannelLayout;
    static CEF_CHANNEL_LAYOUT_4_1_QUAD_SIDE: CefChannelLayout;
    static CEF_CHANNEL_LAYOUT_5_0: CefChannelLayout;
    static CEF_CHANNEL_LAYOUT_5_0_BACK: CefChannelLayout;
    static CEF_CHANNEL_LAYOUT_5_1: CefChannelLayout;
    static CEF_CHANNEL_LAYOUT_5_1_4_DOWNMIX: CefChannelLayout;
    static CEF_CHANNEL_LAYOUT_5_1_BACK: CefChannelLayout;
    static CEF_CHANNEL_LAYOUT_6_0: CefChannelLayout;
    static CEF_CHANNEL_LAYOUT_6_0_FRONT: CefChannelLayout;
    static CEF_CHANNEL_LAYOUT_6_1: CefChannelLayout;
    static CEF_CHANNEL_LAYOUT_6_1_BACK: CefChannelLayout;
    static CEF_CHANNEL_LAYOUT_6_1_FRONT: CefChannelLayout;
    static CEF_CHANNEL_LAYOUT_7_0: CefChannelLayout;
    static CEF_CHANNEL_LAYOUT_7_0_FRONT: CefChannelLayout;
    static CEF_CHANNEL_LAYOUT_7_1: CefChannelLayout;
    static CEF_CHANNEL_LAYOUT_7_1_WIDE: CefChannelLayout;
    static CEF_CHANNEL_LAYOUT_7_1_WIDE_BACK: CefChannelLayout;
    static CEF_CHANNEL_LAYOUT_BITSTREAM: CefChannelLayout;
    static CEF_CHANNEL_LAYOUT_DISCRETE: CefChannelLayout;
    static CEF_CHANNEL_LAYOUT_HEXAGONAL: CefChannelLayout;
    static CEF_CHANNEL_LAYOUT_MAX: CefChannelLayout;
    static CEF_CHANNEL_LAYOUT_MONO: CefChannelLayout;
    static CEF_CHANNEL_LAYOUT_NONE: CefChannelLayout;
    static CEF_CHANNEL_LAYOUT_OCTAGONAL: CefChannelLayout;
    static CEF_CHANNEL_LAYOUT_QUAD: CefChannelLayout;
    static CEF_CHANNEL_LAYOUT_STEREO: CefChannelLayout;
    static CEF_CHANNEL_LAYOUT_STEREO_AND_KEYBOARD_MIC: CefChannelLayout;
    static CEF_CHANNEL_LAYOUT_STEREO_DOWNMIX: CefChannelLayout;
    static CEF_CHANNEL_LAYOUT_SURROUND: CefChannelLayout;
    static CEF_CHANNEL_LAYOUT_UNSUPPORTED: CefChannelLayout;
    static forId(paramarg0: number): CefChannelLayout;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): CefChannelLayout;
    static values(): (Object | null)[];
    private constructor(arg2: number)
    // private id: number;
    name(): "CEF_CHANNEL_LAYOUT_NONE" | "CEF_CHANNEL_LAYOUT_UNSUPPORTED" | "CEF_CHANNEL_LAYOUT_MONO" | "CEF_CHANNEL_LAYOUT_STEREO" | "CEF_CHANNEL_LAYOUT_2_1" | "CEF_CHANNEL_LAYOUT_SURROUND" | "CEF_CHANNEL_LAYOUT_4_0" | "CEF_CHANNEL_LAYOUT_2_2" | "CEF_CHANNEL_LAYOUT_QUAD" | "CEF_CHANNEL_LAYOUT_5_0" | "CEF_CHANNEL_LAYOUT_5_1" | "CEF_CHANNEL_LAYOUT_5_0_BACK" | "CEF_CHANNEL_LAYOUT_5_1_BACK" | "CEF_CHANNEL_LAYOUT_7_0" | "CEF_CHANNEL_LAYOUT_7_1" | "CEF_CHANNEL_LAYOUT_7_1_WIDE" | "CEF_CHANNEL_LAYOUT_STEREO_DOWNMIX" | "CEF_CHANNEL_LAYOUT_2POINT1" | "CEF_CHANNEL_LAYOUT_3_1" | "CEF_CHANNEL_LAYOUT_4_1" | "CEF_CHANNEL_LAYOUT_6_0" | "CEF_CHANNEL_LAYOUT_6_0_FRONT" | "CEF_CHANNEL_LAYOUT_HEXAGONAL" | "CEF_CHANNEL_LAYOUT_6_1" | "CEF_CHANNEL_LAYOUT_6_1_BACK" | "CEF_CHANNEL_LAYOUT_6_1_FRONT" | "CEF_CHANNEL_LAYOUT_7_0_FRONT" | "CEF_CHANNEL_LAYOUT_7_1_WIDE_BACK" | "CEF_CHANNEL_LAYOUT_OCTAGONAL" | "CEF_CHANNEL_LAYOUT_DISCRETE" | "CEF_CHANNEL_LAYOUT_STEREO_AND_KEYBOARD_MIC" | "CEF_CHANNEL_LAYOUT_4_1_QUAD_SIDE" | "CEF_CHANNEL_LAYOUT_BITSTREAM" | "CEF_CHANNEL_LAYOUT_5_1_4_DOWNMIX" | "CEF_CHANNEL_LAYOUT_MAX";
}