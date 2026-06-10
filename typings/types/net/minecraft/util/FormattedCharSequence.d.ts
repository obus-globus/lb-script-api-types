import type { Object } from '../../../java/lang/Object.d.ts'
import type { Style } from '../../../net/minecraft/network/chat/Style.d.ts'
import type { FormattedCharSink } from '../../../net/minecraft/util/FormattedCharSink.d.ts'
export interface FormattedCharSequence extends Object {
    accept(output: (param0: number, param1: Style, param2: number) => boolean): boolean;
}