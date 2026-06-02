import type { IntFunction } from '../../../java/util/function/IntFunction.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { PointerBuffer } from '../../../org/lwjgl/PointerBuffer.d.ts'
import type { FunctionProviderLocal } from '../../../org/lwjgl/system/FunctionProviderLocal.d.ts'
export class ALCCapabilities extends Object {
    constructor(arg0: FunctionProviderLocal, arg1: number, arg2: string[], arg3: (param0: PointerBuffer) => unknown)
    ALC_ENUMERATE_ALL_EXT: boolean;
    ALC_ENUMERATION_EXT: boolean;
    ALC_EXT_CAPTURE: boolean;
    ALC_EXT_DEDICATED: boolean;
    ALC_EXT_DEFAULT_FILTER_ORDER: boolean;
    ALC_EXT_EFX: boolean;
    ALC_EXT_debug: boolean;
    ALC_EXT_direct_context: boolean;
    ALC_EXT_disconnect: boolean;
    ALC_EXT_thread_local_context: boolean;
    ALC_LOKI_audio_channel: boolean;
    ALC_SOFT_HRTF: boolean;
    ALC_SOFT_device_clock: boolean;
    ALC_SOFT_loopback: boolean;
    ALC_SOFT_output_limiter: boolean;
    ALC_SOFT_output_mode: boolean;
    ALC_SOFT_pause_device: boolean;
    ALC_SOFT_reopen_device: boolean;
    ALC_SOFT_system_events: boolean;
    OpenALC10: boolean;
    OpenALC11: boolean;
    OpenALC_SOFT_loopback_bformat: boolean;
    // private addresses: PointerBuffer;
    alcCaptureCloseDevice: number;
    alcCaptureOpenDevice: number;
    alcCaptureSamples: number;
    alcCaptureStart: number;
    alcCaptureStop: number;
    alcCloseDevice: number;
    alcCreateContext: number;
    alcDestroyContext: number;
    alcDevicePauseSOFT: number;
    alcDeviceResumeSOFT: number;
    alcEventCallbackSOFT: number;
    alcEventControlSOFT: number;
    alcEventIsSupportedSOFT: number;
    alcGetContextsDevice: number;
    alcGetCurrentContext: number;
    alcGetEnumValue: number;
    alcGetError: number;
    alcGetInteger64vSOFT: number;
    alcGetIntegerv: number;
    alcGetProcAddress: number;
    alcGetProcAddress2: number;
    alcGetString: number;
    alcGetStringiSOFT: number;
    alcGetThreadContext: number;
    alcIsExtensionPresent: number;
    alcIsRenderFormatSupportedSOFT: number;
    alcLoopbackOpenDeviceSOFT: number;
    alcMakeContextCurrent: number;
    alcOpenDevice: number;
    alcProcessContext: number;
    alcRenderSamplesSOFT: number;
    alcReopenDeviceSOFT: number;
    alcResetDeviceSOFT: number;
    alcSetThreadContext: number;
    alcSuspendContext: number;
    // private device: number;
    getAddressBuffer(): PointerBuffer;
}