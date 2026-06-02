import type { Object } from '../../../java/lang/Object.d.ts'
import type { Component } from '../../../net/minecraft/network/chat/Component.d.ts'
export interface ProgressListener extends Object{
    progressStage(string: Component): void;
    progressStagePercentage(i: number): void;
    progressStart(string: Component): void;
    progressStartNoAbort(string: Component): void;
    stop(): void;
}