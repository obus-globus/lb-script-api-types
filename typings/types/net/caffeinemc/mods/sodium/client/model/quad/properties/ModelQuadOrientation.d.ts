import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
import type { ModelQuadView } from '../../../../../../../../net/caffeinemc/mods/sodium/client/model/quad/ModelQuadView.d.ts'
export class ModelQuadOrientation extends Enum<ModelQuadOrientation> {
    static FLIP: ModelQuadOrientation;
    static NORMAL: ModelQuadOrientation;
    static orientByBrightness(paramarg0: number[], paramarg1: number[]): ModelQuadOrientation;
    static orientByBrightness(paramarg0: number[], paramarg1: ModelQuadView): ModelQuadOrientation;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ModelQuadOrientation;
    static values(): ModelQuadOrientation[];
    private constructor(arg2: number[])
    // private indices: number[];
    getVertexIndex(arg0: number): number;
    name(): "NORMAL" | "FLIP";
}