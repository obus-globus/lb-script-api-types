import type { Object } from '../../../java/lang/Object.d.ts'
import type { Settings$Companion } from '../../../okhttp3/internal/http2/Settings$Companion.d.ts'
export class Settings extends Object {
    static COUNT: number;
    static Companion: Settings$Companion;
    static DEFAULT_INITIAL_WINDOW_SIZE: number;
    static ENABLE_PUSH: number;
    static HEADER_TABLE_SIZE: number;
    static INITIAL_WINDOW_SIZE: number;
    static MAX_CONCURRENT_STREAMS: number;
    static MAX_FRAME_SIZE: number;
    static MAX_HEADER_LIST_SIZE: number;
    constructor()
    readonly headerTableSize: number;
    readonly initialWindowSize: number;
    // private set: number;
    // private values: number[];
    clear(): void;
    get(id: number): number;
    getEnablePush(defaultValue: boolean): boolean;
    getMaxConcurrentStreams(): number;
    getMaxFrameSize(defaultValue: number): number;
    getMaxHeaderListSize(defaultValue: number): number;
    isSet(id: number): boolean;
    merge(other: Settings): void;
    set(id: number, value: number): Settings;
    size(): number;
}