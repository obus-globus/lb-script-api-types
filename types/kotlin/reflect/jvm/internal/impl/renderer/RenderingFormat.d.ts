import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class RenderingFormat extends Enum<RenderingFormat> {
    static HTML: RenderingFormat;
    static PLAIN: RenderingFormat;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): RenderingFormat;
    static values(): (Object | null)[];
    private constructor()
    escape(arg0: string): string;
    name(): "PLAIN" | "HTML";
}