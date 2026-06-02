import type { SpdyFrame } from '../../../../../io/netty/handler/codec/spdy/SpdyFrame.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface SpdySettingsFrame extends SpdyFrame, Object{
    clearPreviouslyPersistedSettings(): boolean;
    getValue(arg0: number): number;
    ids(): number[];
    isPersistValue(arg0: number): boolean;
    isPersisted(arg0: number): boolean;
    isSet(arg0: number): boolean;
    removeValue(arg0: number): SpdySettingsFrame;
    setClearPreviouslyPersistedSettings(arg0: boolean): SpdySettingsFrame;
    setPersistValue(arg0: number, arg1: boolean): SpdySettingsFrame;
    setPersisted(arg0: number, arg1: boolean): SpdySettingsFrame;
    setValue(arg0: number, arg1: number): SpdySettingsFrame;
    setValue(arg0: number, arg1: number, arg2: boolean, arg3: boolean): SpdySettingsFrame;
}