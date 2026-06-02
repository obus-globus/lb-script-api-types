import type { Logging$Severity } from '../../../../dev/kastle/webrtc/logging/Logging$Severity.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface LogSink extends Object{
    onLogMessage(arg0: Logging$Severity, arg1: string): void;
}