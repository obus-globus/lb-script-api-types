import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class DrawBackend extends Enum<DrawBackend> {
    static BACKEND: DrawBackend;
    static OPENGL: DrawBackend;
    static VK_INDIRECT: DrawBackend;
    static VK_MULTIDRAW: DrawBackend;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): DrawBackend;
    static values(): (Object | null)[];
    private constructor()
    name(): "OPENGL" | "VK_MULTIDRAW" | "VK_INDIRECT";
}