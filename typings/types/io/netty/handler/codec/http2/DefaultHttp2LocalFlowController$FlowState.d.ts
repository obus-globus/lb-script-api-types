import type { Object } from '../../../../../java/lang/Object.d.ts'
export interface DefaultHttp2LocalFlowController$FlowState extends Object{
    consumeBytes(arg0: number): boolean;
    endOfStream(arg0: boolean): void;
    incrementFlowControlWindows(arg0: number): void;
    incrementInitialStreamWindow(arg0: number): void;
    initialWindowSize(): number;
    receiveFlowControlledFrame(arg0: number): void;
    unconsumedBytes(): number;
    window(arg0: number): void;
    windowSize(): number;
    windowUpdateRatio(): number;
    windowUpdateRatio(arg0: number): void;
    writeWindowUpdateIfNeeded(): boolean;
}