import type { Object } from '../../../../../java/lang/Object.d.ts'
export abstract class Profiler$Section extends Object {
    constructor(arg0: string)
    readonly fine: boolean;
    readonly info: string;
    // private invalidated: boolean;
    readonly name: string;
    readonly root: boolean;
    end(): Profiler$Section;
    getAverageTime(): number;
    getBaseName(): string;
    getCount(): number;
    getCursor(): number;
    getDelegate(): Profiler$Section;
    getInfo(): string;
    getMarkedCount(): number;
    getMarkedTime(): number;
    getName(): string;
    getSeconds(): number;
    getTime(): number;
    getTimes(): number[];
    getTotalAverageTime(): number;
    getTotalCount(): number;
    getTotalSeconds(): number;
    getTotalTime(): number;
    invalidate(): Profiler$Section;
    isFine(): boolean;
    isRoot(): boolean;
    mark(): void;
    next(arg0: string): Profiler$Section;
    setFine(arg0: boolean): Profiler$Section;
    setInfo(arg0: string): void;
    setRoot(arg0: boolean): Profiler$Section;
    start(): Profiler$Section;
    stop(): Profiler$Section;
    toString(): string;
}