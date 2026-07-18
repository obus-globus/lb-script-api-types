import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface Http2SettingsReceivedConsumer extends Object{
    consumeReceivedSettings(arg0: JavaMap<any, any>): void;
}