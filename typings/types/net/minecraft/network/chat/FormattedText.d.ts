import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { FormattedText$ContentConsumer } from '../../../../net/minecraft/network/chat/FormattedText$ContentConsumer.d.ts'
import type { FormattedText$StyledContentConsumer } from '../../../../net/minecraft/network/chat/FormattedText$StyledContentConsumer.d.ts'
import type { Style } from '../../../../net/minecraft/network/chat/Style.d.ts'
export interface FormattedText extends Object{
    getString(): string;
    visit<T extends Object | number | string | boolean>(output: FormattedText$ContentConsumer<T>): Optional<T>;
    visit<T extends Object | number | string | boolean>(output: FormattedText$StyledContentConsumer<T>, parentStyle: Style): Optional<T>;
}