import type { Optional } from '../../../java/util/Optional.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { FormattedText } from '../../../net/minecraft/network/chat/FormattedText.d.ts'
import type { FormattedText$ContentConsumer } from '../../../net/minecraft/network/chat/FormattedText$ContentConsumer.d.ts'
import type { FormattedText$StyledContentConsumer } from '../../../net/minecraft/network/chat/FormattedText$StyledContentConsumer.d.ts'
import type { Style } from '../../../net/minecraft/network/chat/Style.d.ts'
import type { Unit } from '../../../net/minecraft/util/Unit.d.ts'
export class StringSplitter$LineComponent extends Object implements FormattedText {
    static EMPTY: FormattedText;
    static STOP_ITERATION: Optional<Unit>;
    constructor(contents: string, style: Style)
    // private contents: string;
    // private style: Style;
    getString(): string;
    visit<T extends unknown>(output: FormattedText$ContentConsumer<T>): Optional<T>;
    visit<T extends unknown>(output: FormattedText$StyledContentConsumer<T>, parentStyle: Style): Optional<T>;
}