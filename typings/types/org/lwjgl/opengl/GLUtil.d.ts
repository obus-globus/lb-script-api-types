import type { PrintStream } from '../../../java/io/PrintStream.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Callback } from '../../../org/lwjgl/system/Callback.d.ts'
export class GLUtil extends Object {
    static setupDebugMessageCallback(): Callback;
    static setupDebugMessageCallback(paramarg0: PrintStream): Callback;
    private constructor()
}