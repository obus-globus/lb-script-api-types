import type { JsonObject } from '../../../../../com/google/gson/JsonObject.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class FabricDataGenHelper extends Object {
    static ENABLED: boolean;
    static addConditions(paramarg0: JsonObject, paramarg1: (Object | null)[]): void;
    static addConditions(paramarg0: Object, paramarg1: (Object | null)[]): void;
    static consumeConditions(paramarg0: Object): (Object | null)[];
    static deleteDirectory(paramarg0: Path[][]): void;
    static run(): void;
    private constructor()
}