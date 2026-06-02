import type { StringBuilder } from '../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { HexFormat$NumberHexFormat$Companion } from '../../kotlin/text/HexFormat$NumberHexFormat$Companion.d.ts'
export class HexFormat$NumberHexFormat extends Object {
    static Companion: HexFormat$NumberHexFormat$Companion;
    constructor(prefix: string, suffix: string, removeLeadingZeros: boolean, minLength: number)
    // private ignoreCase: boolean;
    /*not mapped: */ getIgnoreCase$kotlin_stdlib(): boolean;
    // private isDigitsOnly: boolean;
    /*not mapped: */ isDigitsOnly$kotlin_stdlib(): boolean;
    // private isDigitsOnlyAndNoPadding: boolean;
    /*not mapped: */ isDigitsOnlyAndNoPadding$kotlin_stdlib(): boolean;
    readonly minLength: number;
    readonly prefix: string;
    readonly removeLeadingZeros: boolean;
    readonly suffix: string;
    appendOptionsTo(sb: StringBuilder, indent: string): StringBuilder;
    toString(): string;
}