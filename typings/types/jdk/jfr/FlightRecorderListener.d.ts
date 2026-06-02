import type { FlightRecorder } from '../../jdk/jfr/FlightRecorder.d.ts'
import type { Recording } from '../../jdk/jfr/Recording.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export interface FlightRecorderListener extends Object{
    recorderInitialized(arg0: FlightRecorder): void;
    recordingStateChanged(arg0: Recording): void;
}