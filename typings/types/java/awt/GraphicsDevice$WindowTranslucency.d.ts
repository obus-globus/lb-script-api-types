import type { Class } from '../../java/lang/Class.d.ts'
import type { Enum } from '../../java/lang/Enum.d.ts'
export class GraphicsDevice$WindowTranslucency extends Enum<GraphicsDevice$WindowTranslucency> {
    static PERPIXEL_TRANSLUCENT: GraphicsDevice$WindowTranslucency;
    static PERPIXEL_TRANSPARENT: GraphicsDevice$WindowTranslucency;
    static TRANSLUCENT: GraphicsDevice$WindowTranslucency;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): GraphicsDevice$WindowTranslucency;
    static values(): GraphicsDevice$WindowTranslucency[];
    private constructor()
    name(): "PERPIXEL_TRANSPARENT" | "TRANSLUCENT" | "PERPIXEL_TRANSLUCENT";
}