import type { Object } from '../../../java/lang/Object.d.ts'
import type { PatternFormatter } from '../../../org/apache/logging/log4j/core/pattern/PatternFormatter.d.ts'
export class LoggerNamePatternSelector$LoggerNameSelector extends Object {
    constructor(arg0: string, arg1: PatternFormatter[])
    // private formatters: PatternFormatter[];
    // private isPackage: boolean;
    // private name: string;
    get(): PatternFormatter[];
    test(arg0: string): boolean;
}