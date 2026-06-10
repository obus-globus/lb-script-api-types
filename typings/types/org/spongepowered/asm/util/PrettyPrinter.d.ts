import type { PrintStream } from '../../../../java/io/PrintStream.d.ts'
import type { StackTraceElement } from '../../../../java/lang/StackTraceElement.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Throwable } from '../../../../java/lang/Throwable.d.ts'
import type { ILogger } from '../../../../org/spongepowered/asm/logging/ILogger.d.ts'
import type { Level } from '../../../../org/spongepowered/asm/logging/Level.d.ts'
import type { PrettyPrinter$HorizontalRule } from '../../../../org/spongepowered/asm/util/PrettyPrinter$HorizontalRule.d.ts'
import type { PrettyPrinter$IPrettyPrintable } from '../../../../org/spongepowered/asm/util/PrettyPrinter$IPrettyPrintable.d.ts'
import type { PrettyPrinter$ISpecialEntry } from '../../../../org/spongepowered/asm/util/PrettyPrinter$ISpecialEntry.d.ts'
import type { PrettyPrinter$Table } from '../../../../org/spongepowered/asm/util/PrettyPrinter$Table.d.ts'
export class PrettyPrinter extends Object {
    static dumpStack(): void;
    static print(paramarg0: Throwable): void;
    constructor()
    constructor(arg0: number)
    // private horizontalRule: PrettyPrinter$HorizontalRule;
    // private kvFormat: string;
    // private kvKeyWidth: number;
    // private lines: Object[];
    // private recalcWidth: boolean;
    // private table: PrettyPrinter$Table;
    // private width: number;
    // private wrapWidth: number;
    add(): PrettyPrinter;
    add(arg0: Object): PrettyPrinter;
    add(arg0: Object, arg1: number): PrettyPrinter;
    add(arg0: StackTraceElement[], arg1: number): PrettyPrinter;
    add(arg0: Object[]): PrettyPrinter;
    add(arg0: Object[], arg1: string): PrettyPrinter;
    add(arg0: string): PrettyPrinter;
    add(arg0: string, arg1: Object[]): PrettyPrinter;
    add(arg0: Throwable): PrettyPrinter;
    add(arg0: Throwable, arg1: number): PrettyPrinter;
    add(arg0: Map<Object | null, Object | null>): PrettyPrinter;
    add(arg0: PrettyPrinter$IPrettyPrintable): PrettyPrinter;
    addIndexed(arg0: Object[]): PrettyPrinter;
    // private addLine(arg0: Object): void;
    addWithIndices(arg0: (Object | null)[]): PrettyPrinter;
    addWrapped(arg0: number, arg1: string, arg2: Object[]): PrettyPrinter;
    addWrapped(arg0: string, arg1: Object[]): PrettyPrinter;
    // private append(arg0: Object, arg1: number, arg2: string): PrettyPrinter;
    centre(): PrettyPrinter;
    // private getWrapped(arg0: number, arg1: string, arg2: string): string[];
    hr(): PrettyPrinter;
    hr(arg0: string): PrettyPrinter;
    kv(arg0: string, arg1: Object): PrettyPrinter;
    kv(arg0: string, arg1: string, arg2: Object[]): PrettyPrinter;
    kvWidth(arg0: number): PrettyPrinter;
    log(arg0: ILogger): PrettyPrinter;
    log(arg0: ILogger, arg1: Level): PrettyPrinter;
    log(arg0: Level): PrettyPrinter;
    // private logSpecial(arg0: ILogger, arg1: Level, arg2: PrettyPrinter$ISpecialEntry): void;
    // private logString(arg0: ILogger, arg1: Level, arg2: string): void;
    print(): PrettyPrinter;
    print(arg0: PrintStream): PrettyPrinter;
    // private printSpecial(arg0: PrintStream, arg1: PrettyPrinter$ISpecialEntry): void;
    // private printString(arg0: PrintStream, arg1: string): void;
    spacing(arg0: number): PrettyPrinter;
    table(): PrettyPrinter;
    table(arg0: Object[]): PrettyPrinter;
    table(arg0: string[]): PrettyPrinter;
    th(): PrettyPrinter;
    // private th(arg0: boolean): PrettyPrinter;
    tr(arg0: Object[]): PrettyPrinter;
    trace(): PrettyPrinter;
    trace(arg0: PrintStream): PrettyPrinter;
    trace(arg0: PrintStream, arg1: string): PrettyPrinter;
    trace(arg0: PrintStream, arg1: string, arg2: Level): PrettyPrinter;
    trace(arg0: PrintStream, arg1: ILogger): PrettyPrinter;
    trace(arg0: PrintStream, arg1: ILogger, arg2: Level): PrettyPrinter;
    trace(arg0: PrintStream, arg1: Level): PrettyPrinter;
    trace(arg0: string): PrettyPrinter;
    trace(arg0: string, arg1: Level): PrettyPrinter;
    trace(arg0: ILogger): PrettyPrinter;
    trace(arg0: ILogger, arg1: Level): PrettyPrinter;
    trace(arg0: Level): PrettyPrinter;
    // private updateWidth(): void;
    wrapTo(): number;
    wrapTo(arg0: number): PrettyPrinter;
}