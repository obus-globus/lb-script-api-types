import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface FormattedText$ContentConsumer<T extends unknown> extends Object{
    accept(contents: string): Optional<T>;
}