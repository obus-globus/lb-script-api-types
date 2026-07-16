import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
import type { RenderingFormat } from '../../../../../../kotlin/reflect/jvm/internal/impl/renderer/RenderingFormat.d.ts'
export class RenderingFormat$HTML extends RenderingFormat {
    static HTML: RenderingFormat;
    static PLAIN: RenderingFormat;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): RenderingFormat;
    static values(): RenderingFormat[];
    escape(arg0: string): string;
}