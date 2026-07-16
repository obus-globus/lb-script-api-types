import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class DrawBackend extends Enum<DrawBackend> {
    static BACKEND: DrawBackend;
    static OPENGL: DrawBackend;
    static VK_INDIRECT: DrawBackend;
    static VK_MULTIDRAW: DrawBackend;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): DrawBackend;
    static values(): DrawBackend[];
    private constructor()
    name(): "OPENGL" | "VK_MULTIDRAW" | "VK_INDIRECT";
}