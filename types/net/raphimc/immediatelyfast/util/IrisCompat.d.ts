import type { BooleanConsumer } from '../../../../it/unimi/dsi/fastutil/booleans/BooleanConsumer.d.ts'
import type { ThreadLocal } from '../../../../java/lang/ThreadLocal.d.ts'
import type { BooleanSupplier } from '../../../../java/util/function/BooleanSupplier.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class IrisCompat extends Object {
    static IRIS_LOADED: boolean;
    static isRenderingLevel: () => kotlin.Boolean;
    static renderWithExtendedVertexFormat: (param0: boolean) => void;
    static skipExtension: ThreadLocal<boolean>;
    static init(): void;
    constructor()
}