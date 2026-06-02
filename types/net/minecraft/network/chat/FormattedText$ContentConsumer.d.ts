import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface FormattedText$ContentConsumer<T extends Object | number | string | boolean> extends Object{
    accept(contents: string): Optional<T>;
}