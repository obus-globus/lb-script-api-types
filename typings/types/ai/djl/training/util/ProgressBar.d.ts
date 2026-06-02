import type { Progress } from '../../../../ai/djl/util/Progress.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ProgressBar extends Object implements Progress {
    constructor()
    constructor(arg0: string, arg1: number)
    constructor(arg0: string, arg1: number, arg2: string)
    // private currentPercent: number;
    // private disableProgressBar: boolean;
    // private max: number;
    // private message: string;
    // private progress: number;
    // private progressChar: string;
    // private trailingMessage: string;
    end(): void;
    increment(arg0: number): void;
    reset(arg0: string, arg1: number, arg2: string): void;
    reset(arg0: string, arg1: number): void;
    start(arg0: number): void;
    // private trimMessage(arg0: string): string;
    update(arg0: number, arg1: string): void;
    update(arg0: number): void;
}