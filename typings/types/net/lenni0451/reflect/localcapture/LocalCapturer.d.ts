import type { Consumer } from '../../../../java/util/function/Consumer.d.ts'
import type { Function } from '../../../../java/util/function/Function.d.ts'
import type { Stream } from '../../../../java/util/stream/Stream.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { LocalStackFrame } from '../../../../net/lenni0451/reflect/localcapture/LocalStackFrame.d.ts'
export class LocalCapturer extends Object {
    static forEach(paramarg0: (param0: LocalStackFrame) => void): void;
    static getStackFrames(): (Object | null)[];
    static walk(paramarg0: (param0: Stream<LocalStackFrame>) => Object | null): Object | null;
    constructor()
}