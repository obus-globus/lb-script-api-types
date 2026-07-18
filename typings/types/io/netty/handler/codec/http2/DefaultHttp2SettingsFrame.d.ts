import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Http2SettingsFrame } from '../../../../../io/netty/handler/codec/http2/Http2SettingsFrame.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class DefaultHttp2SettingsFrame extends Object implements Http2SettingsFrame {
    constructor(arg0: JavaMap<any, any>)
    // private settings: JavaMap<any, any>;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    name(): string;
    settings(): JavaMap<any, any>;
    toString(): string;
}