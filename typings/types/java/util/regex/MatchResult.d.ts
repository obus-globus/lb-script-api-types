import type { JavaMap } from '../../../JavaMap.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
export interface MatchResult extends Object{
    end(): number;
    end(arg0: number): number;
    end(arg0: string): number;
    group(): string;
    group(arg0: number): string;
    group(arg0: string): string;
    groupCount(): number;
    // private groupNumber(arg0: string): number;
    hasMatch(): boolean;
    namedGroups(): JavaMap<string, number>;
    start(): number;
    start(arg0: number): number;
    start(arg0: string): number;
}