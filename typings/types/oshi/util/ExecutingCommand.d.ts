import type { Object } from '../../java/lang/Object.d.ts'
export class ExecutingCommand extends Object {
    static getAnswerAt(paramarg0: string, paramarg1: number): string;
    static getFirstAnswer(paramarg0: string): string;
    static runNative(paramarg0: string): string[];
    static runNative(paramarg0: (Object | null)[]): string[];
    static runNative(paramarg0: (Object | null)[], paramarg1: (Object | null)[]): string[];
    private constructor()
}