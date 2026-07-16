import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { RenderingFormat } from '../../../../../../kotlin/reflect/jvm/internal/impl/renderer/RenderingFormat.d.ts'
export class RenderingFormat$HTML extends RenderingFormat {
    static HTML: RenderingFormat;
    static PLAIN: RenderingFormat;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): RenderingFormat;
    static values(): RenderingFormat[];
    escape(arg0: string): string;
}