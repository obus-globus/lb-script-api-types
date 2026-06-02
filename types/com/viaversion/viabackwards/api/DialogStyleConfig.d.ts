import type { Record } from '../../../../java/lang/Record.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class DialogStyleConfig extends Record {
    constructor(pageNavigationTitle: string, pageNavigationNext: string, pageNavigationPrevious: string, increaseValue: string, decreaseValue: string, valueRange: string, nextOption: string, previousOption: string, currentValue: string, editValue: string, setText: string, close: string, toggleValue: string)
    // private close: string;
    // private currentValue: string;
    // private decreaseValue: string;
    // private editValue: string;
    // private increaseValue: string;
    // private nextOption: string;
    // private pageNavigationNext: string;
    // private pageNavigationPrevious: string;
    // private pageNavigationTitle: string;
    // private previousOption: string;
    // private setText: string;
    // private toggleValue: string;
    // private valueRange: string;
    close(): string;
    currentValue(): string;
    decreaseValue(): string;
    editValue(): string;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    increaseValue(): string;
    nextOption(): string;
    pageNavigationNext(): string;
    pageNavigationPrevious(): string;
    pageNavigationTitle(): string;
    previousOption(): string;
    setText(): string;
    toString(): string;
    toggleValue(): string;
    valueRange(): string;
}