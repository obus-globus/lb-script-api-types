import type { RegexFlags } from '../../../../com/oracle/truffle/regex/RegexFlags.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class RegexFlags$Builder extends Object {
    private constructor()
    // private value: number;
    build(): RegexFlags;
    dotAll(enabled: boolean): RegexFlags$Builder;
    global(enabled: boolean): RegexFlags$Builder;
    hasIndices(enabled: boolean): RegexFlags$Builder;
    ignoreCase(enabled: boolean): RegexFlags$Builder;
    multiline(enabled: boolean): RegexFlags$Builder;
    sticky(enabled: boolean): RegexFlags$Builder;
    unicode(enabled: boolean): RegexFlags$Builder;
    unicodeSets(enabled: boolean): RegexFlags$Builder;
    // private updateFlag(enabled: boolean, bitMask: number): void;
}