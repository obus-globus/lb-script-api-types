import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class GlVersion extends Enum<GlVersion> {
    static GL_11: GlVersion;
    static GL_12: GlVersion;
    static GL_30: GlVersion;
    static GL_31: GlVersion;
    static GL_33: GlVersion;
    static GL_41: GlVersion;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): GlVersion;
    static values(): GlVersion[];
    private constructor()
    name(): "GL_11" | "GL_12" | "GL_30" | "GL_31" | "GL_33" | "GL_41";
}