import type { StringBuilder } from '../../java/lang/StringBuilder.d.ts'
import type { Row } from '../../joptsimple/internal/Row.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
export class Rows extends Object {
    constructor(arg0: number, arg1: number)
    // private columnSeparatorWidth: number;
    // private overallWidth: number;
    // private rows: Row[];
    // private widthOfWidestDescription: number;
    // private widthOfWidestOption: number;
    // private add(arg0: Row): void;
    add(arg0: string, arg1: string): void;
    // private descriptionWidth(): number;
    fitToWidth(): void;
    // private optionWidth(): number;
    // private pad(arg0: StringBuilder, arg1: string, arg2: number): StringBuilder;
    render(): string;
    reset(): void;
}