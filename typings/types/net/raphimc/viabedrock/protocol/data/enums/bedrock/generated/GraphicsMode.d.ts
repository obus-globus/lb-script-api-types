import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class GraphicsMode extends Enum<GraphicsMode> {
    static Advanced: GraphicsMode;
    static Fancy: GraphicsMode;
    static RayTraced: GraphicsMode;
    static Simple: GraphicsMode;
    static getByName(paramarg0: string): GraphicsMode;
    static getByName(paramarg0: string, paramarg1: GraphicsMode): GraphicsMode;
    static getByValue(paramarg0: number): GraphicsMode;
    static getByValue(paramarg0: number, paramarg1: GraphicsMode): GraphicsMode;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): GraphicsMode;
    static values(): GraphicsMode[];
    private constructor(arg2: number)
    private constructor(arg2: GraphicsMode)
    readonly value: number;
    getValue(): number;
    name(): "Simple" | "Fancy" | "Advanced" | "RayTraced";
}