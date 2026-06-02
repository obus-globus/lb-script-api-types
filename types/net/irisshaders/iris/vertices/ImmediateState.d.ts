import type { ThreadLocal } from '../../../../java/lang/ThreadLocal.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class ImmediateState extends Object {
    static bypass: boolean;
    static isRenderingBEs: boolean;
    static isRenderingLevel: boolean;
    static renderWithExtendedVertexFormat: boolean;
    static safeToMultiply: boolean;
    static skipExtension: ThreadLocal<boolean>;
    static temporarilyIgnorePass: boolean;
    static usingTessellation: boolean;
    constructor()
}