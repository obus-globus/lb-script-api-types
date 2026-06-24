import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { InvertableSetOptionState$Limitation } from '../../../../../../net/minecraft/commands/arguments/selector/options/InvertableSetOptionState$Limitation.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
export class InvertableSetOptionState extends Object {
    constructor()
    // private state: InvertableSetOptionState$Limitation;
    // private tags: Identifier[];
    // private canLimitToMultiple(): boolean;
    // private canLimitToSingle(): boolean;
    canParseAny(): boolean;
    canParseAnyTag(): boolean;
    canParseElement(inverted: boolean): boolean;
    canParseNegativeElement(): boolean;
    canParsePositiveElement(): boolean;
    canParseTag(tag: Identifier): boolean;
    markParsedElement(inverted: boolean): void;
    // private markParsedMultiple(): void;
    markParsedNegativeElement(): void;
    markParsedPositiveElement(): void;
    // private markParsedSingle(): void;
    markParsedTag(tag: Identifier): void;
}