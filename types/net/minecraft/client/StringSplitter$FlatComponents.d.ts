import type { Object } from '../../../java/lang/Object.d.ts'
import type { StringSplitter$LineComponent } from '../../../net/minecraft/client/StringSplitter$LineComponent.d.ts'
import type { FormattedText } from '../../../net/minecraft/network/chat/FormattedText.d.ts'
import type { Style } from '../../../net/minecraft/network/chat/Style.d.ts'
export class StringSplitter$FlatComponents extends Object {
    constructor(parts: StringSplitter$LineComponent[])
    // private flatParts: string;
    // private parts: StringSplitter$LineComponent[];
    charAt(position: number): string;
    getRemainder(): FormattedText;
    splitAt(skipPosition: number, skipSize: number, splitStyle: Style): FormattedText;
}