import type { StringBuilder } from '../../../../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Cloneable } from '../../../../../../../java/lang/Cloneable.d.ts'
import type { CommandLine$Help$Ansi$StyledSection } from '../../../../../../../org/apache/logging/log4j/core/tools/picocli/CommandLine$Help$Ansi$StyledSection.d.ts'
export class CommandLine$Help$Ansi$Text extends Object implements Cloneable {
    constructor(null_: CommandLine$Help$Ansi$Text, maxLength: number)
    constructor(null_: CommandLine$Help$Ansi$Text, input: string)
    // private from: number;
    // private length: number;
    // private maxLength: number;
    // private plain: StringBuilder;
    // private sections: CommandLine$Help$Ansi$StyledSection[];
    // private addStyledSection(start: number, length: number, startStyle: string, endStyle: string): void;
    append(string: string): CommandLine$Help$Ansi$Text;
    append(other: CommandLine$Help$Ansi$Text): CommandLine$Help$Ansi$Text;
    protected clone(): Object;
    clone(): Object;
    equals(obj: Object | null): boolean;
    // private findSectionContaining(index: number): CommandLine$Help$Ansi$StyledSection;
    getStyledChars(from: number, length: number, destination: CommandLine$Help$Ansi$Text, offset: number): void;
    hashCode(): number;
    plainString(): string;
    splitLines(): CommandLine$Help$Ansi$Text[];
    substring(start: number): CommandLine$Help$Ansi$Text;
    substring(start: number, end: number): CommandLine$Help$Ansi$Text;
    toString(): string;
}