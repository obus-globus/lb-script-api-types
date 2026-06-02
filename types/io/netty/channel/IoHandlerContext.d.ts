import type { Object } from '../../../java/lang/Object.d.ts'
export interface IoHandlerContext extends Object{
    canBlock(): boolean;
    deadlineNanos(): number;
    delayNanos(arg0: number): number;
    reportActiveIoTime(arg0: number): void;
    shouldReportActiveIoTime(): boolean;
}