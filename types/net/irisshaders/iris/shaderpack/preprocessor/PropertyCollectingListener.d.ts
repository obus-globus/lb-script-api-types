import type { StringBuilder } from '../../../../../java/lang/StringBuilder.d.ts'
import type { DefaultPreprocessorListener } from '../../../../../org/anarres/cpp/DefaultPreprocessorListener.d.ts'
import type { Token } from '../../../../../org/anarres/cpp/Token.d.ts'
export class PropertyCollectingListener extends DefaultPreprocessorListener {
    static PROPERTY_MARKER: string;
    constructor()
    // private builder: StringBuilder;
    collectLines(): string;
    handleError(arg0: Token[], arg1: number, arg2: number, arg3: string): void;
    handleWarning(arg0: Token[], arg1: number, arg2: number, arg3: string): void;
}