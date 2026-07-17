import type { JavaMap } from '../../JavaMap.d.ts'
import type { Closeable } from '../../java/io/Closeable.d.ts'
import type { InputStream } from '../../java/io/InputStream.d.ts'
import type { Class } from '../../java/lang/Class.d.ts'
import type { Path } from '../../java/nio/file/Path.d.ts'
import type { Duration } from '../../java/time/Duration.d.ts'
import type { Instant } from '../../java/time/Instant.d.ts'
import type { Configuration } from '../../jdk/jfr/Configuration.d.ts'
import type { Event } from '../../jdk/jfr/Event.d.ts'
import type { EventSettings } from '../../jdk/jfr/EventSettings.d.ts'
import type { RecordingState } from '../../jdk/jfr/RecordingState.d.ts'
import type { PlatformRecording } from '../../jdk/jfr/internal/PlatformRecording.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class Recording extends Object implements Closeable {
    constructor()
    constructor(arg0: Configuration)
    constructor(arg0: JavaMap<string, string>)
    // private internal: PlatformRecording;
    close(): void;
    copy(arg0: boolean): Recording;
    disable(arg0: Class<Event>): EventSettings;
    disable(arg0: string): EventSettings;
    dump(arg0: Path): void;
    enable(arg0: Class<Event>): EventSettings;
    enable(arg0: string): EventSettings;
    getDestination(): Path;
    getDumpOnExit(): boolean;
    getDuration(): Duration;
    getFlushInterval(): Duration;
    getId(): number;
    getInternal(): PlatformRecording;
    getMaxAge(): Duration;
    getMaxSize(): number;
    getName(): string;
    getSettings(): JavaMap<string, string>;
    getSize(): number;
    getStartTime(): Instant;
    getState(): RecordingState;
    getStopTime(): Instant;
    getStream(arg0: Instant, arg1: Instant): InputStream;
    isToDisk(): boolean;
    scheduleStart(arg0: Duration): void;
    setDestination(arg0: Path): void;
    setDumpOnExit(arg0: boolean): void;
    setDuration(arg0: Duration): void;
    setMaxAge(arg0: Duration): void;
    setMaxSize(arg0: number): void;
    setName(arg0: string): void;
    // private setSetting(arg0: string, arg1: string): void;
    setSettings(arg0: JavaMap<string, string>): void;
    setToDisk(arg0: boolean): void;
    start(): void;
    stop(): boolean;
}