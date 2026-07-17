import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { DefaultSpdySettingsFrame$Setting } from '../../../../../io/netty/handler/codec/spdy/DefaultSpdySettingsFrame$Setting.d.ts'
import type { SpdySettingsFrame } from '../../../../../io/netty/handler/codec/spdy/SpdySettingsFrame.d.ts'
import type { StringBuilder } from '../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class DefaultSpdySettingsFrame extends Object implements SpdySettingsFrame {
    static SETTINGS_CLIENT_CERTIFICATE_VECTOR_SIZE: number;
    static SETTINGS_CURRENT_CWND: number;
    static SETTINGS_DOWNLOAD_BANDWIDTH: number;
    static SETTINGS_DOWNLOAD_RETRANS_RATE: number;
    static SETTINGS_INITIAL_WINDOW_SIZE: number;
    static SETTINGS_MAX_CONCURRENT_STREAMS: number;
    static SETTINGS_MINOR_VERSION: number;
    static SETTINGS_ROUND_TRIP_TIME: number;
    static SETTINGS_UPLOAD_BANDWIDTH: number;
    constructor()
    // private clear: boolean;
    // private settingsMap: JavaMap<number, DefaultSpdySettingsFrame$Setting>;
    // private appendSettings(arg0: StringBuilder): void;
    clearPreviouslyPersistedSettings(): boolean;
    // private getSettings(): Map$Entry<number, DefaultSpdySettingsFrame$Setting>[];
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
    toString(): string;
}