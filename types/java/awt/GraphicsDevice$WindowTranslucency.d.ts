import type { Class } from '../../java/lang/Class.d.ts'
import type { Object } from '../../java/lang/Object.d.ts'
import type { Enum } from '../../java/lang/Enum.d.ts'
export class GraphicsDevice$WindowTranslucency extends Enum<GraphicsDevice$WindowTranslucency> {
    static PERPIXEL_TRANSLUCENT: GraphicsDevice$WindowTranslucency;
    static PERPIXEL_TRANSPARENT: GraphicsDevice$WindowTranslucency;
    static TRANSLUCENT: GraphicsDevice$WindowTranslucency;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): GraphicsDevice$WindowTranslucency;
    static values(): (Object | null)[];
    private constructor()
    name(): "PERPIXEL_TRANSPARENT" | "TRANSLUCENT" | "PERPIXEL_TRANSLUCENT";
}