import type { TextComponent } from '../../../../../../../com/viaversion/viaversion/libs/mcstructs/text/TextComponent.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class SingleOptionInput$Entry extends Object {
    constructor(arg0: string, arg1: TextComponent, arg2: boolean)
    constructor(arg0: string, arg1: boolean)
    readonly display: TextComponent;
    readonly id: string;
    readonly initial: boolean;
    equals(arg0: Object | null): boolean;
    getDisplay(): TextComponent;
    getId(): string;
    hashCode(): number;
    isInitial(): boolean;
    toString(): string;
}