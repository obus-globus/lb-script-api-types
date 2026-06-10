import type { Class } from '../../java/lang/Class.d.ts'
import type { Runnable } from '../../java/lang/Runnable.d.ts'
import type { Event } from '../../jdk/jfr/Event.d.ts'
import type { EventType } from '../../jdk/jfr/EventType.d.ts'
import type { FlightRecorderListener } from '../../jdk/jfr/FlightRecorderListener.d.ts'
import type { Recording } from '../../jdk/jfr/Recording.d.ts'
import type { PlatformRecorder } from '../../jdk/jfr/internal/PlatformRecorder.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class FlightRecorder extends Object {
    static addListener(paramarg0: FlightRecorderListener): void;
    static addPeriodicEvent(paramarg0: Class<Event>, paramarg1: () => void): void;
    static getFlightRecorder(): FlightRecorder;
    static isAvailable(): boolean;
    static isInitialized(): boolean;
    static register(paramarg0: Class<Event>): void;
    static removeListener(paramarg0: FlightRecorderListener): boolean;
    static removePeriodicEvent(paramarg0: () => void): boolean;
    static unregister(paramarg0: Class<Event>): void;
    private constructor(arg0: PlatformRecorder)
    // private internal: PlatformRecorder;
    getEventTypes(): EventType[];
    getInternal(): PlatformRecorder;
    getRecordings(): Recording[];
    takeSnapshot(): Recording;
}