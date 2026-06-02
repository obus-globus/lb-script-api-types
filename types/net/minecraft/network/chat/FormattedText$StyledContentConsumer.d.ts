import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Style } from '../../../../net/minecraft/network/chat/Style.d.ts'
export interface FormattedText$StyledContentConsumer<T extends Object | number | string | boolean> extends Object{
    accept(style: Style, contents: string): Optional<T>;
}